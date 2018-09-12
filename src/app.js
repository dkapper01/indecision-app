class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "This the the subtitle";
    const options = ["Thing one", "Thing two", "Thing three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
  handPick() {
    alert("working");
  }
  render() {
    return (
      <div>
        <button onClick={this.handPick}>What Should Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props); 
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleSubmit(e) {
    e.preventDefault(); 
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
