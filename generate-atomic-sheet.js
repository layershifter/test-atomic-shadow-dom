import props from "known-css-properties";

const usedProps = props.all
  .filter((prop) => !prop.startsWith("-") && prop !== "all")
  .slice(0, 100);

const classes = usedProps.map((prop) => `c${prop}`).join(" ");
const styles = usedProps
  .map((prop) => `.c${prop} { ${prop}: initial }`)
  .join("\n");

console.log(`const classes = "${classes}"`);
console.log(`const styles = \`${styles}\``);
