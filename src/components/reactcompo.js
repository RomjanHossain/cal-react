import React, { Component } from "react";

class ReactCompo extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p className="result-txt">{result}</p>
      </div>
    );
  }
}

export default ReactCompo;
