import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'

const reloadIcon = html`<style>
    .reload-icon {
      fill: currentColor;
      color: rgb(255, 255, 255);
      height: 60%;
      width: 60%;
    }

    #button:disabled > .reload-icon {
      display: none;
    }
  </style>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="reload-icon">
    <path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z" />
  </svg>`

const ovalLoaderIcon = html`<style>
    .oval-loader-icon {
      display: none;
      height: 60%;
      width: 60%;
    }

    #button:disabled > .oval-loader-icon {
      stroke: currentColor;
      color: rgb(255, 255, 255);
      display: block;
    }
  </style>

  <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" class="oval-loader-icon">
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>`

@controller
export class RunCircuitButtonElement extends HTMLElement {
  @target button: HTMLInputElement

  runSimulator(): void {
    this.disable()
    this.dispatchEvent(new Event('run-circuit-button.click', {bubbles: true}))
  }

  disable(): void {
    this.button.disabled = true
  }

  enable(): void {
    this.button.disabled = false
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.dispatchEvent(
      new Event('run-circuit-button.load', {
        bubbles: true
      })
    )
  }

  update(): void {
    render(
      html`<style>
          #button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(206, 130, 255);
            border-radius: 9999px;
            border-width: 0px;
            cursor: pointer;
            width: 4rem;
            height: 4rem;
            box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          #button:disabled {
            cursor: wait;
          }

          #button:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
        </style>

        <button
          id="button"
          type="button"
          data-action="click:run-circuit-button#runSimulator"
          data-target="run-circuit-button.button"
          aria-label="Run circuit"
        >
          ${reloadIcon} ${ovalLoaderIcon}
        </button>`,
      this.shadowRoot!
    )
  }
}
