class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["one", "two", "three"]
    };
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <Options options={this.state.options}/>
        <InputOption />
      </div>
    );
  }
}

class InputOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="addOption" />
        <button type="submit">Add Option</button>
      </form>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map(option => (
            <Option key={option} optionText={option} />
          ))
        }
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
