const classes = "foo-bar";

const template = `<div class="${classes}">Test element</div>`;

const styles = `
.foo-bar {
  accelerator: initial;
  accent-color: initial;
  additive-symbols: initial;
  align-content: initial;
  align-items: initial;
  align-self: initial;
  alignment-baseline: initial;
  alt: initial;
  animation: initial;
  animation-delay: initial;
  animation-direction: initial;
  animation-duration: initial;
  animation-fill-mode: initial;
  animation-iteration-count: initial;
  animation-name: initial;
  animation-play-state: initial;
  animation-timing-function: initial;
  app-region: initial;
  appearance: initial;
  ascent-override: initial;
  aspect-ratio: initial;
  audio-level: initial;
  azimuth: initial;
  backdrop-filter: initial;
  backface-visibility: initial;
  background: initial;
  background-attachment: initial;
  background-blend-mode: initial;
  background-clip: initial;
  background-color: initial;
  background-image: initial;
  background-origin: initial;
  background-position: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-repeat: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-size: initial;
  base-palette: initial;
  baseline-shift: initial;
  baseline-source: initial;
  behavior: initial;
  block-ellipsis: initial;
  block-size: initial;
  block-step: initial;
  block-step-align: initial;
  block-step-insert: initial;
  block-step-round: initial;
  block-step-size: initial;
  bookmark-label: initial;
  bookmark-level: initial;
  bookmark-state: initial;
  border: initial;
  border-block: initial;
  border-block-color: initial;
  border-block-end: initial;
  border-block-end-color: initial;
  border-block-end-style: initial;
  border-block-end-width: initial;
  border-block-start: initial;
  border-block-start-color: initial;
  border-block-start-style: initial;
  border-block-start-width: initial;
  border-block-style: initial;
  border-block-width: initial;
  border-bottom: initial;
  border-bottom-color: initial;
  border-bottom-left-radius: initial;
  border-bottom-right-radius: initial;
  border-bottom-style: initial;
  border-bottom-width: initial;
  border-boundary: initial;
  border-collapse: initial;
  border-color: initial;
  border-end-end-radius: initial;
  border-end-start-radius: initial;
  border-image: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-image-slice: initial;
  border-image-source: initial;
  border-image-width: initial;
  border-inline: initial;
  border-inline-color: initial;
  border-inline-end: initial;
  border-inline-end-color: initial;
  border-inline-end-style: initial;
  border-inline-end-width: initial;
  border-inline-start: initial;
  border-inline-start-color: initial;
  border-inline-start-style: initial;
  border-inline-start-width: initial;
  border-inline-style: initial;
  border-inline-width: initial;
  border-left: initial;
  border-left-color: initial;
  border-left-style: initial;
  border-left-width: initial;
  border-radius: initial;
}
`;

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

customElements.define(
  "test-element",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });

      const el = document.createElement("div");
      const textEl = document.createTextNode("Test element");

      el.className = classes;
      el.appendChild(textEl);
      shadow.appendChild(el);

      shadow.adoptedStyleSheets = [sheet];
    }
  }
);

document.getElementById("run").addEventListener("click", () => {
  document.querySelector("#app").innerHTML = Array.from(
    { length: 10000 },
    (_) => `<test-element></test-element>`
  ).join("");
});
