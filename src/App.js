import "./App.css";
import KeypadCompo from "./components/keypadcompo.js";
import ReactCompo from "./components/reactcompo.js";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div className="calculator-body">
        <div>
          <h1>My first react app and it's calculator</h1>
          <ReactCompo result={this.state.result} />
          <KeypadCompo onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
