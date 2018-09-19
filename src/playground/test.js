class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      options: ["Dishes", "Vacum", "clean", "fold"]
    };
  }
  DisplayOptions() {}
  render() {
    return (
      <div>
        <h1>This App</h1>
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
       {}
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map(option => {
            return <Option key="option" optionList={option}/>
          })
        }
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input tpye="text" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
