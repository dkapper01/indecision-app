class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "This the the subtitle";
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
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
  constructor() {
    super();
  }
  render() {
    return <button>What Should Do?</button>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.options.length}</p>
        Options
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>Option</div>;
  }
}

class AddOption extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>AddOption</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
