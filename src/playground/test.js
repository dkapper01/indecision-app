class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      options: ["thing one", "thing two", "thing three"]
    };
  }

  AddOption(option) {
    
  }
  render() {
    return (
      <div>
        <h1>The App</h1>
        <Options daniel={this.state.options} />
        <AddOption />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option options={this.props.daniel} />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => {
          return <p>{option}</p>;
        })}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(); 
  }

  handleOnSubmit(e) {
    e.preventDefault(); 

    const option = e.target.elements.option.value; 
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
