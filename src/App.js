import "./App.css";
import React, { Component } from "react";
import ResultBox from "./components/results.js";
import KeypadCompo from "./components/keycompo.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  // let's add some func
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
      <div className="cal-body">
        <h1 className="head">Calculator</h1>
        <ResultBox result={this.state.result} />
        <KeypadCompo onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
