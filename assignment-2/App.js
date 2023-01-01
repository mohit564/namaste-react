import { createElement } from "react";
import { createRoot, render } from "react-dom";

const heading = createElement("h1", null, "Hello World!");

const root = createRoot(document.getElementById("root"));

root.render(heading);