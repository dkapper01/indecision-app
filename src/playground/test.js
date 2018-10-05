// import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["one", "two", "three", "fore"]
    };
    this.catOption = this.catOption.bind(this);
    this.handlRemoveOptions = this.handlRemoveOptions.bind(this);
  }
  handlRemoveOptions() {
    return this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePickOptions() {
    const randomNum = this.options.length;
    const pick = Math.floor((Math.random() * 10) + randomNum);
    console.log(pick);
  }

  catOption(option) {
    this.setState(prevState => {
      options: prevState.options.concat(option);
    });
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <Action 
          handlePickOption={this.handlePickOptions}
        />
        <Options
          options={this.state.options}
          handlRemoveOptions={this.handlRemoveOptions}
        />
        <AddOption catOption={this.catOption} />
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePickOption}>Pick</button>
      </div>
    );
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const inputValue = e.target.elements.theText.value.trim();
    console.log(inputValue);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="theText" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlRemoveOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
