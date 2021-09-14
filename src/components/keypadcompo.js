import React, { Component } from "react";

class KeypadCompo extends Component {
  render() {
    return (
      <div className="buttons">
        <button
          name="("
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          (
        </button>
        <button
          name="CE"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          CE
        </button>
        <button
          name=")"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          )
        </button>
        <button
          name="C"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          C
        </button>
        <br />

        <button
          name="1"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          1
        </button>
        <button
          className="btn"
          name="2"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          2
        </button>
        <button
          className="btn"
          name="3"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          3
        </button>
        <button
          className="btn"
          name="+"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          +
        </button>
        <br />

        <button
          className="btn"
          name="4"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          4
        </button>
        <button
          className="btn"
          name="5"
          onClick={(e) => this.props.onClick(e.target.name)}
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
          name="-"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="btn"
        >
          -
        </button>
        <br />

        <button
          className="btn"
          name="7"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          7
        </button>
        <button
          className="btn"
          name="8"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          8
        </button>
        <button
          className="btn"
          name="9"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          9
        </button>
        <button
          className="btn"
          name="*"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          x
        </button>
        <br />

        <button
          className="btn"
          name="."
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          .
        </button>
        <button
          name="0"
          className="btn"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          0
        </button>
        <button
          name="="
          className="btn"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          =
        </button>
        <button
          className="btn"
          name="/"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          ÷
        </button>
        <br />
      </div>
    );
  }
}

export default KeypadCompo;
