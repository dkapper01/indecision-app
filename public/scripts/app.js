"use strict";

console.log("Cat");

var test = false;

var something = function something() {
  if (test === true) {
    test = false;
    app();
  } else {
    test = true;
    app();
  }
};

var appRoot = document.getElementById("app");

var app = function app() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Daniel Kapper"
    ),
    React.createElement(
      "button",
      { onClick: something },
      test ? "Hide" : "Show"
    ),
    React.createElement(
      "p",
      null,
      test && React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Dnaiel kapper"
        )
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

app();
