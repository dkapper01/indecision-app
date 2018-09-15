class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["thing one", "thing two", "thing three"]
    };
    this.concatOption = this.concatOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  concatOption(option) {
    if(!option) {
      console.log(option)
      return <p>Please enter a value</p>
    } else if(this.state.options) {
      return
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  removeAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const pick = Math.floor(Math.random() * this.state.options.length); 
    const random = this.state.options[pick];
    console.log(random); 
  }
  render() {
    return (
      <div>
        <Action handlePick={this.handlePick}/>
        <Options 
          daniel={this.state.options} 
          removeAll={this.removeAll}
        />
        <AddOption concatOption={this.concatOption} />
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}>Pick Random Option</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.removeAll}>Remove All</button>
        {this.props.daniel.map(option => {
          return <Option key={option} optionListItem={option} />;
        })}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionListItem}</div>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnSubmit(event) {
    event.preventDefault();

    const option = event.target.elements.optionText.value;
    const error = this.props.concatOption(option);
    
    
    this.setState(() => {
      return { error }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <input type="test" name="optionText" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
