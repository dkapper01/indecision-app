"use strict";

console.log("App is working with cat");

var user = {
  title: "List App",
  subtitle: "An app that helps you keep track of things",
  options: ["one", "two"]
};

var onFromSubmit = function onFromSubmit(e) {
  e.preventDefault();
  c;
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.title
  ),
  React.createElement(
    "p",
    null,
    user.subtitle
  ),
  React.createElement(
    "form",
    { onSubmit: onFromSubmit },
    React.createElement("input", { type: "text", name: "options" }),
    React.createElement(
      "button",
      null,
      "Add Option"
    )
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
