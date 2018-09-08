console.log("App is working with cat");

const user = {
  title: "List App",
  subtitle: "An app that helps you keep track of things",
  options: ["one", "two"]
};

const onFromSubmit = (e) => {
  e.preventDefault(); 
c
}

const template = (
  <div>
    <h1>{user.title}</h1>
    <p>{user.subtitle}</p>

    <form onSubmit={onFromSubmit} >
      <input type='text' name='options' />
      <button>Add Option</button>
    </form>

  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
