import React, { Component } from "react";

class KeypadCompo extends Component {
  render() {
    return (
      <div className="buttons">
        <button
          name="1"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          1
        </button>

        <button
          name="2"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          2
        </button>

        <button
          name="3"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          3
        </button>

        <button
          name="CE"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          C
        </button>
        <br />
        <button
          name="4"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          4
        </button>

        <button
          name="5"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          5
        </button>

        <button
          name="6"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          6
        </button>

        <button
          name="*"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          *
        </button>
        <br />
        <button
          name="7"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          7
        </button>

        <button
          name="8"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          8
        </button>

        <button
          name="9"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          9
        </button>

        <button
          name="/"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          /
        </button>
        <br />
        <button
          name="-"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          -
        </button>

        <button
          name="0"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          0
        </button>

        <button
          name="+"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          +
        </button>

        <button
          name="="
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          =
        </button>
        <br />
      </div>
    );
  }
}

export default KeypadCompo;
