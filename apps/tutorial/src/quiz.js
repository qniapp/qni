// Drop-in replacement for the Orbit web component (js.withorbit.com), which
// shut down. Same markup, no spaced repetition and no storage: each prompt is
// answered on the spot and self-graded. See docs/quiz-spec.md.

import { QUIZ_IMAGE_ALT } from './quiz-alt.js'

const checkIcon =
  '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const crossIcon =
  '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
let nextId = 0

// Top-level `{...}` are deletions. Braces inside TeX (`$...$`) or nested in a
// deletion belong to the text.
export function parseCloze(source) {
  const segments = []
  let text = '',
    depth = 0,
    math = false
  const flush = (blank) => {
    if (text || blank) segments.push({ text, blank })
    text = ''
  }
  for (let i = 0; i < source.length; i++) {
    const char = source[i]
    if (char === '\\' && i + 1 < source.length) {
      text += char + source[++i]
      continue
    }
    if (char === '$') math = !math
    if (!math && char === '{') {
      if (depth++ === 0) {
        flush(false)
        continue
      }
    } else if (!math && char === '}' && depth > 0) {
      if (--depth === 0) {
        flush(true)
        continue
      }
    }
    text += char
  }
  if (depth > 0) text = '{' + text
  flush(false)
  return segments
}

// Orbit prompts are Markdown with TeX. Support what the tutorial uses:
// **strong**, *em*, $inline$ and $$display$$ math. MathJax (if the page loads
// it) only recognizes its default \( \) and $$ $$ delimiters.
function appendRich(parent, source) {
  const text = source.replace(/\s+/g, ' ').trim()
  for (const [index, part] of text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/).entries()) {
    if (!part) continue
    if (index % 2) {
      parent.append(part.startsWith('$$') ? part : `\\(${part.slice(1, -1)}\\)`)
      continue
    }
    for (const [i, piece] of part.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/).entries()) {
      if (!piece) continue
      if (i % 2 === 0) {
        parent.append(piece)
        continue
      }
      const strong = piece.startsWith('**')
      const element = document.createElement(strong ? 'strong' : 'em')
      element.textContent = piece.slice(strong ? 2 : 1, strong ? -2 : -1)
      parent.append(element)
    }
  }
}

function element(tag, className) {
  const node = document.createElement(tag)
  node.className = className
  return node
}

function attachments(value) {
  const urls = (value ?? '').split(/\s+/).filter(Boolean)
  if (!urls.length) return null
  const box = element('div', 'orbit-quiz-attachments')
  for (const url of urls) {
    const image = document.createElement('img')
    image.src = url
    image.alt = QUIZ_IMAGE_ALT[url] ?? ''
    image.loading = 'lazy'
    image.decoding = 'async'
    box.append(image)
  }
  return box
}

function button(className, label, icon = '') {
  const node = element('button', `orbit-quiz-button ${className}`)
  node.type = 'button'
  node.innerHTML = icon
  node.append(label)
  return node
}

function typeset(node) {
  const mathJax = window.MathJax
  // Before startup the initial page typeset will pick the node up.
  if (!mathJax?.typesetPromise || !mathJax.startup?.promise) return
  mathJax.startup.promise = mathJax.startup.promise
    .then(() => mathJax.typesetPromise([node]))
    .catch(() => {})
}

export class OrbitPrompt extends HTMLElement {
  static observedAttributes = [
    'question',
    'answer',
    'question-attachments',
    'answer-attachments',
    'cloze',
  ]
  card

  connectedCallback() {
    if (!this.card) this.render()
  }
  attributeChangedCallback() {
    if (this.card) this.render()
  }

  render() {
    const id = `orbit-quiz-${++nextId}`
    const cloze = this.getAttribute('cloze')
    const card = element('div', 'orbit-quiz-card')
    card.setAttribute('role', 'group')
    card.setAttribute('aria-labelledby', `${id}-q`)

    const question = element('div', 'orbit-quiz-question')
    question.id = `${id}-q`
    const answer = element('div', 'orbit-quiz-answer')
    answer.id = `${id}-a`
    answer.tabIndex = -1
    if (cloze !== null) {
      card.classList.add('is-cloze')
      for (const segment of parseCloze(cloze)) {
        if (!segment.blank) {
          appendRich(question, segment.text)
          continue
        }
        const blank = element('span', 'orbit-quiz-blank')
        const hidden = element('span', 'orbit-quiz-blank-placeholder')
        hidden.textContent = '空欄'
        const filled = element('span', 'orbit-quiz-blank-answer')
        appendRich(filled, segment.text)
        blank.append(hidden, filled)
        question.append(blank)
      }
      // The filled blanks are the answer: on reveal, focus the completed sentence.
      question.tabIndex = -1
    } else {
      appendRich(question, this.getAttribute('question') ?? '')
      const questionImages = attachments(this.getAttribute('question-attachments'))
      if (questionImages) question.append(questionImages)
      const answerText = element('p', 'orbit-quiz-answer-text')
      appendRich(answerText, this.getAttribute('answer') ?? '')
      if (answerText.textContent) answer.append(answerText)
      const answerImages = attachments(this.getAttribute('answer-attachments'))
      if (answerImages) answer.append(answerImages)
    }

    const actions = element('div', 'orbit-quiz-actions')
    const revealed = cloze === null ? answer : question
    const reveal = button('orbit-quiz-reveal', '答えを見る')
    reveal.setAttribute('aria-controls', revealed.id)
    reveal.setAttribute('aria-expanded', 'false')
    const correct = button('orbit-quiz-correct', '正解', checkIcon)
    const incorrect = button('orbit-quiz-incorrect', '不正解', crossIcon)
    const retry = button('orbit-quiz-retry', 'やり直す')
    const status = element('p', 'orbit-quiz-status')
    status.setAttribute('role', 'status')
    actions.append(reveal, correct, incorrect, retry)
    card.append(question)
    if (cloze === null) card.append(answer)
    card.append(status, actions)

    const set = (state, focus) => {
      card.dataset.state = state
      const graded = state === 'correct' || state === 'incorrect'
      reveal.hidden = state !== 'unanswered'
      reveal.setAttribute('aria-expanded', String(state !== 'unanswered'))
      correct.hidden = incorrect.hidden = state !== 'revealed'
      retry.hidden = !graded
      answer.hidden = state === 'unanswered'
      status.innerHTML = graded ? (state === 'correct' ? checkIcon : crossIcon) : ''
      if (graded) status.append(state === 'correct' ? '正解' : '不正解')
      focus?.focus()
    }
    // On reveal, move focus to what was revealed so screen readers read it.
    reveal.addEventListener('click', () => set('revealed', revealed))
    correct.addEventListener('click', () => set('correct', retry))
    incorrect.addEventListener('click', () => set('incorrect', retry))
    retry.addEventListener('click', () => set('unanswered', reveal))
    set('unanswered')

    this.card?.remove()
    this.card = card
    this.append(card)
    typeset(card)
  }
}

if (!customElements.get('orbit-prompt')) customElements.define('orbit-prompt', OrbitPrompt)
if (!customElements.get('orbit-reviewarea'))
  customElements.define('orbit-reviewarea', class extends HTMLElement {})
