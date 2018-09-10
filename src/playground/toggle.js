console.log("Cat");

let test = false;

const something = () => {
  if (test === true) {
    test = false;
    app();
  } else {
    test = true;
    app();
  }
};

const appRoot = document.getElementById("app");


const app = () => {
  const template = (
    <div>
      <p>Daniel Kapper</p>
      <button onClick={something}>{test ? "Hide" : "Show"}</button>
      <p>
        {
          test && (
            <div>
              <p>Dnaiel kapper</p>
            </div>
          )
        }
      </p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

app();



