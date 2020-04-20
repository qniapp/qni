import { Controller } from "stimulus";
import hljs from "highlight.js";
import erb from "highlight.js/lib/languages/erb";

export default class extends Controller {
  static targets = [
    "previewPill",
    "codePill",
    "preview",
    "body",
    "code",
    "preCode",
  ];

  bodyTarget: HTMLElement;
  codePillTarget: HTMLElement;
  codeTarget: HTMLElement;
  preCodeTarget: HTMLElement;
  previewPillTarget: HTMLElement;
  previewTarget: HTMLElement;

  connect() {
    hljs.registerLanguage("erb", erb);
  }

  showPreview() {
    this.codePillTarget.classList.remove(this.activePillClass);
    this.previewPillTarget.classList.add(this.activePillClass);
    this.bodyTarget.classList.remove(this.bodyNoPaddingClass);
    this.codeTarget.classList.add(this.hiddenClass);
    this.previewTarget.classList.remove(this.hiddenClass);
  }

  code() {
    hljs.highlightBlock(this.preCodeTarget);
    this.previewPillTarget.classList.remove(this.activePillClass);
    this.codePillTarget.classList.add(this.activePillClass);
    this.bodyTarget.classList.add(this.bodyNoPaddingClass);
    this.previewTarget.classList.add(this.hiddenClass);
    this.codeTarget.classList.remove(this.hiddenClass);
  }

  private get activePillClass(): string {
    return this.data.get("active-pill-class");
  }

  private get hiddenClass(): string {
    return this.data.get("hidden-class");
  }

  private get bodyNoPaddingClass(): string {
    return this.data.get("body-no-padding-class");
  }
}
