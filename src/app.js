class IndecisionApp extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      options: ["Thing one", "Thing two", "Thing three"]
      // options: []
    }
    this.handDeleteOptions = this.handDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  handDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const test = this.state.options[randomNum]
    console.log(test);
  }
  render() {
    const title = "Indecision";
    const subtitle = "This the the subtitle";
    // const options = ["Thing one", "Thing two", "Thing three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options} 
          handDeleteOptions={this.handDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          type="button"
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
        What Should Do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handDeleteOptions}>Remove All</button>
        <p>
          {this.props.options.map(option => {
            return <Option key={option} optionText={option} />;
          })}
        </p>
        Options
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      option: ""
    }

  }
  handleSubmit(e) {
    e.preventDefault(); 

    this.setState((prevState) => {
      option: prevState + option
    })
    const option = e.target.elements.option.value.trim();
    
    if(option) {
      alert(option); 
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="option"
        />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
