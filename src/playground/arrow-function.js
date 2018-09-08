const user = {
  names: ["daniel", "gulcan", "Amanda", "Allen"],
  numbers: [2, 34, 52, 77, 63, 45],

  numFunc() {
    const newNum = this.numbers.map((num) => {
      return num * 3;
    })
    return newNum
  }

  
};

console.log(user.numFunc());


let count = 0;

const minusOne = () => {
  count++;
  renderCountApp(); 
}

const addCount = () => {
  count--;
  renderCountApp(); 
}

const reset = () => {
  count = 0; 
  renderCountApp(); 
}
const appRoot = document.getElementById("app");

const renderCountApp = () => {
  const templateTwo = (
    <div>
      <p>Count: {count}</p>

      <button onClick={minusOne}>-1</button>
      <button onClick={addCount}>+1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
renderCountApp();