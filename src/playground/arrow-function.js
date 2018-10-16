// yarn  babel src/playground/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this); 
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
Counter.defa
ReactDOM.render(<Counter />, document.getElementById("app"));

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
