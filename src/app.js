console.log("App is working with cat");

const user = {
  title: "List App",
  subtitle: "An app that helps you keep track of things",
  options: []
};

const onFromSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    user.options.push(option);
    e.target.elements.option.value = "";
    app();
  }
};

const removeAll = () => {
  user.options = [];
  app();
};
const appRoot = document.getElementById("app");

const app = () => {
  const template = (
    <div>
      <h1>{user.title}</h1>
      <p>{user.subtitle}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol> 
        {
          user.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFromSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
app();
