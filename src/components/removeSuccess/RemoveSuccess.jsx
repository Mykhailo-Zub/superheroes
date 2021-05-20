import React from "react";
import { connect } from "react-redux";
import style from "./RemoveSuccess.module.css";

const RemoveSuccess = (props) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>Superhero removed successfully!</h1>
      <button
        className={style.backBtn}
        type="button"
        onClick={() => props.history.push("/")}
      >
        Go to main page
      </button>
    </div>
  );
};

export default connect(null, null)(RemoveSuccess);
