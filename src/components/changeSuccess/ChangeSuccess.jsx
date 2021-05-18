import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./ChangeSuccess.module.css";

class ChangeSuccess extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.header}>Information changed successfully!</h1>
        <button
          className={style.backBtn}
          type="button"
          onClick={() => this.props.history.push("/")}
        >
          Go to main page
        </button>
      </div>
    );
  }
}

export default connect(null, null)(ChangeSuccess);
