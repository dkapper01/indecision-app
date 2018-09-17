class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      options: ["thing one", "thing two", "thing three"]
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.liveBtn = this.liveBtn.bind(this); 
  }

  handleAddOne(option) {
    console.log("Working addoption");      
    
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
          
        }
      })
  }

  handleRemoveAll() {
    console.log("working");
    this.setState(() => {
      return {
        options: [],
        btn: false
      };
    });
  }

liveBtn() {
    return false
}
  handlePick() {
    const num = Math.floor(Math.random() * this.state.options.length);
  }

  render() {
    return (
      <div>
        <h1>The App</h1>
        <Action 
          handlePick={this.handlePick}
          liveBtn={this.liveBtn}
        />
        <Options
          daniel={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption 
          handleAddOne={this.handleAddOne}
        />
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <button 
        type="button"
        onClick={this.props.handlePick}  
        disabled=true
      >Random Pick
      </button>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove all</button>
        <Option options={!this.props.daniel} />
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
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(option);
    const error = this.props.handleAddOne(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
