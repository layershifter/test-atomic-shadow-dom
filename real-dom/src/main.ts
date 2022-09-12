import "./style.css";

const classes =
  "caccelerator caccent-color cadditive-symbols calign-content calign-items calign-self calignment-baseline calt canimation canimation-delay canimation-direction canimation-duration canimation-fill-mode canimation-iteration-count canimation-name canimation-play-state canimation-timing-function capp-region cappearance cascent-override caspect-ratio caudio-level cazimuth cbackdrop-filter cbackface-visibility cbackground cbackground-attachment cbackground-blend-mode cbackground-clip cbackground-color cbackground-image cbackground-origin cbackground-position cbackground-position-x cbackground-position-y cbackground-repeat cbackground-repeat-x cbackground-repeat-y cbackground-size cbase-palette cbaseline-shift cbaseline-source cbehavior cblock-ellipsis cblock-size cblock-step cblock-step-align cblock-step-insert cblock-step-round cblock-step-size cbookmark-label cbookmark-level cbookmark-state cborder cborder-block cborder-block-color cborder-block-end cborder-block-end-color cborder-block-end-style cborder-block-end-width cborder-block-start cborder-block-start-color cborder-block-start-style cborder-block-start-width cborder-block-style cborder-block-width cborder-bottom cborder-bottom-color cborder-bottom-left-radius cborder-bottom-right-radius cborder-bottom-style cborder-bottom-width cborder-boundary cborder-collapse cborder-color cborder-end-end-radius cborder-end-start-radius cborder-image cborder-image-outset cborder-image-repeat cborder-image-slice cborder-image-source cborder-image-width cborder-inline cborder-inline-color cborder-inline-end cborder-inline-end-color cborder-inline-end-style cborder-inline-end-width cborder-inline-start cborder-inline-start-color cborder-inline-start-style cborder-inline-start-width cborder-inline-style cborder-inline-width cborder-left cborder-left-color cborder-left-style cborder-left-width cborder-radius";

document.getElementById("run").addEventListener("click", () => {
  document.querySelector("#app").innerHTML = Array.from(
    { length: 10000 },
    (_) => `<div class="${classes}">Test element</div>`
  ).join("");
});
