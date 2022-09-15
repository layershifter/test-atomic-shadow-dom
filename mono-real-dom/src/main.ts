import "./style.css";

const classes = "foo-bar";

document.getElementById("run").addEventListener("click", () => {
  document.querySelector("#app").innerHTML = Array.from(
    { length: 10000 },
    (_) => `<div class="${classes}">Test element</div>`
  ).join("");
});
