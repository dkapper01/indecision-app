"use strict";

console.log("App is working with cat");

var user = {
  title: "List App",
  subtitle: "An app that helps you keep track of things",
  options: []
};

var onFromSubmit = function onFromSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    user.options.push(option);
    e.target.elements.option.value = "";
    app();
  }
};

var removeAll = function removeAll() {
  user.options = [];
  app();
};

var onMakeDecision = function onMakeDecision() {
  var ranNumber = Math.floor(Math.random() * user.options.length);
  var option = user.options[ranNumber];
  console.log(option);
};
var appRoot = document.getElementById("app");

var app = function app() {
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
      "p",
      null,
      user.options.length > 0 ? "Some options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: user.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      user.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFromSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
app();
