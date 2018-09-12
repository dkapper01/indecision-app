"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
  }

  _createClass(Counter, [{
    key: "handleAddOne",
    value: function handleAddOne() {
      console.log("add one");
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      console.log("minus one");
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      console.log("reset");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Counter:"
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleMinusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// const user = {
//   names: ["daniel", "gulcan", "Amanda", "Allen"],
//   numbers: [2, 34, 52, 77, 63, 45],

//   numFunc() {
//     const newNum = this.numbers.map((num) => {
//       return num * 3;
//     })
//     return newNum
//   }


// };

// console.log(user.numFunc());


// let count = 0;

// const minusOne = () => {
//   count++;
//   renderCountApp(); 
// }

// const addCount = () => {
//   count--;
//   renderCountApp(); 
// }

// const reset = () => {
//   count = 0; 
//   renderCountApp(); 
// }
// const appRoot = document.getElementById("app");

// const renderCountApp = () => {
//   const templateTwo = (
//     <div>
//       <p>Count: {count}</p>

//       <button onClick={minusOne}>-1</button>
//       <button onClick={addCount}>+1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
// };
// renderCountApp();
