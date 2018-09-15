"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      options: ["thing one", "thing two", "thing three"]
    };
    _this.concatOption = _this.concatOption.bind(_this);
    _this.removeAll = _this.removeAll.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "concatOption",
    value: function concatOption(option) {
      if (!option) {
        console.log(option);
        return React.createElement(
          "p",
          null,
          "Please enter a value"
        );
      } else if (this.state.options) {
        return;
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var pick = Math.floor(Math.random() * this.state.options.length);
      var random = this.state.options[pick];
      console.log(random);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Action, { handlePick: this.handlePick }),
        React.createElement(Options, {
          daniel: this.state.options,
          removeAll: this.removeAll
        }),
        React.createElement(AddOption, { concatOption: this.concatOption })
      );
    }
  }]);

  return App;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.handlePick },
          "Pick Random Option"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.removeAll },
          "Remove All"
        ),
        this.props.daniel.map(function (option) {
          return React.createElement(Option, { key: option, optionListItem: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.optionListItem
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this5.state = {
      error: undefined
    };
    _this5.handleOnSubmit = _this5.handleOnSubmit.bind(_this5);
    return _this5;
  }

  _createClass(AddOption, [{
    key: "handleOnSubmit",
    value: function handleOnSubmit(event) {
      event.preventDefault();

      var option = event.target.elements.optionText.value;
      var error = this.props.concatOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleOnSubmit },
          React.createElement("input", { type: "test", name: "optionText" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
