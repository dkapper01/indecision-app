
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      toggle: true
    }
  }

  handleVisibilityToggle() {
      this.setState((prevState) => {
        return {
          toggle: !prevState.toggle          
        }
      })
    }
  render() {
    return (
      <div>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.toggle ? "Hide" : "Show"}
        </button>
        {
          this.state.toggle && (
            <p>
              Daniel is the man!
            </p>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); 



// let test = false;

// const something = () => {
//   if (test === true) {
//     test = false;
//     app();
//   } else {
//     test = true;
//     app();
//   }
// };

// const appRoot = document.getElementById("app");


// const app = () => {
//   const template = (
//     <div>
//       <p>Daniel Kapper</p>
//       <button onClick={something}>{test ? "Hide" : "Show"}</button>
//       <p>
//         {
//           test && (
//             <div>
//               <p>Dnaiel kapper</p>
//             </div>
//           )
//         }
//       </p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// app();



