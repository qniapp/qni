import '../src/quiz.js'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function attributesOf(node) {
  return JSON.stringify([...node.attributes].map(({ name, value }) => [name, value]))
}

function prompt(attributes) {
  const node = document.createElement('orbit-prompt')
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value)
  const originalAttributes = attributesOf(node)
  document.body.append(node)
  assert(attributesOf(node) === originalAttributes, 'prompt attributes unchanged on render')
  return node
}

function checkTransitions(node, revealedContent) {
  const card = node.querySelector('.orbit-quiz-card')
  const reveal = node.querySelector('.orbit-quiz-reveal')
  const correct = node.querySelector('.orbit-quiz-correct')
  const incorrect = node.querySelector('.orbit-quiz-incorrect')
  const retry = node.querySelector('.orbit-quiz-retry')
  const status = node.querySelector('.orbit-quiz-status')
  const answer = node.querySelector('.orbit-quiz-answer')
  const originalAttributes = attributesOf(node)

  function unchangedAttributes() {
    assert(
      attributesOf(node) === originalAttributes,
      'prompt attributes unchanged after interaction'
    )
  }

  function emptyStatus() {
    const style = getComputedStyle(status)
    assert(status.textContent === '', 'result cleared')
    assert(style.display === 'flex' && style.visibility === 'visible', 'empty live region rendered')
    assert(!status.hidden && !status.hasAttribute('aria-hidden'), 'empty live region not hidden')
    assert(status.getClientRects().length > 0, 'empty live region has a layout box')
    assert(status.getBoundingClientRect().height === 0, 'empty live region zero height')
    assert(style.margin === '0px' && style.padding === '0px', 'empty live region no spacing')
  }

  function unanswered() {
    assert(card.dataset.state === 'unanswered', 'unanswered state')
    assert(
      !reveal.hidden && correct.hidden && incorrect.hidden && retry.hidden,
      'only reveal visible'
    )
    assert(reveal.getAttribute('aria-expanded') === 'false', 'collapsed aria state')
    emptyStatus()
    unchangedAttributes()
    if (answer) assert(answer.hidden, 'answer hidden')
  }

  assert(card.getAttribute('role') === 'group', 'card group')
  assert(
    card.getAttribute('aria-labelledby') === node.querySelector('.orbit-quiz-question').id,
    'question label'
  )
  assert(reveal.getAttribute('aria-controls') === revealedContent.id, 'reveal target')
  assert(status.getAttribute('role') === 'status', 'live result')
  unanswered()

  for (const [grade, state, label] of [
    [correct, 'correct', '正解'],
    [incorrect, 'incorrect', '不正解'],
  ]) {
    reveal.click()
    assert(card.dataset.state === 'revealed', 'revealed state')
    assert(
      reveal.hidden && !correct.hidden && !incorrect.hidden && retry.hidden,
      'only grading visible'
    )
    assert(reveal.getAttribute('aria-expanded') === 'true', 'expanded aria state')
    assert(document.activeElement === revealedContent, 'focus revealed content')
    if (answer) assert(!answer.hidden, 'answer revealed')
    emptyStatus()
    unchangedAttributes()

    grade.click()
    assert(card.dataset.state === state && status.textContent === label, 'graded result')
    assert(status.querySelector('svg[aria-hidden="true"]'), 'result icon')
    assert(
      reveal.hidden && correct.hidden && incorrect.hidden && !retry.hidden,
      'only retry visible'
    )
    assert(document.activeElement === retry, 'focus retry')
    if (answer) assert(!answer.hidden, 'answer remains revealed')
    unchangedAttributes()

    retry.click()
    unanswered()
    assert(document.activeElement === reveal, 'focus reveal after retry')
  }
}

describe('tutorial Orbit replacement', () => {
  let stylesheet

  before(async () => {
    const response = await fetch(new URL('../css/quiz.css', import.meta.url))
    assert(response.ok, 'quiz stylesheet loaded')
    stylesheet = document.createElement('style')
    stylesheet.textContent = await response.text()
    document.head.append(stylesheet)
  })

  after(() => stylesheet.remove())

  afterEach(() => {
    document.querySelectorAll('orbit-prompt, orbit-reviewarea').forEach((node) => node.remove())
    delete window.MathJax
  })

  it('transitions Q&A through reveal, correct/incorrect and retry independently', () => {
    const node = prompt({ question: 'Q', answer: '**A**', class: 'authored-class' })
    const other = prompt({ question: 'Other Q', answer: 'Other A' })
    assert(node.querySelector('strong').textContent === 'A', 'formatted answer')
    checkTransitions(node, node.querySelector('.orbit-quiz-answer'))
    assert(
      other.querySelector('.orbit-quiz-card').dataset.state === 'unanswered',
      'independent state'
    )
  })

  it('renders cloze TeX inside a blank and typesets once before reveal', async () => {
    const calls = []
    window.MathJax = {
      startup: { promise: Promise.resolve() },
      typesetPromise: (nodes) => {
        calls.push(nodes)
        return Promise.resolve()
      },
    }
    const source = '文{**答え**} と {$|0\\rangle$}、$x^{2}$ と {$\\frac{1}{2}$}'
    const node = prompt({ cloze: source })
    const card = node.querySelector('.orbit-quiz-card')
    const question = node.querySelector('.orbit-quiz-question')
    const blanks = node.querySelectorAll('.orbit-quiz-blank')
    assert(
      card.classList.contains('is-cloze') && blanks.length === 3,
      'all cloze blanks, not TeX braces'
    )
    assert(node.getAttribute('cloze') === source, 'source attribute preserved')
    assert(blanks[0].querySelector('strong').textContent === '答え', 'formatted blank')
    assert(
      blanks[1].querySelector('.orbit-quiz-blank-answer').textContent === '\\(|0\\rangle\\)',
      'TeX inside blank converted'
    )
    assert(
      blanks[2].querySelector('.orbit-quiz-blank-answer').textContent === '\\(\\frac{1}{2}\\)',
      'TeX braces preserved'
    )
    assert(question.textContent.includes('\\(x^{2}\\)'), 'TeX outside blank preserved')
    assert(
      [...blanks].every(
        (blank) => blank.querySelector('.orbit-quiz-blank-placeholder').textContent === '空欄'
      ),
      'blank labels'
    )
    assert(!node.querySelector('.orbit-quiz-answer'), 'no separate cloze answer')
    await window.MathJax.startup.promise
    assert(calls.length === 1 && calls[0][0] === card, 'typeset card once')
    node.remove()
    document.body.append(node)
    assert(
      node.querySelector('.orbit-quiz-card') === card && calls.length === 1,
      'no rerender on reconnection'
    )
    checkTransitions(node, question)
    assert(calls.length === 1, 'no typesetting on transitions')
  })
})
