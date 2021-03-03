import React from "react";
import { Link } from "react-router-dom";
import style from "./ShowOne.module.css";

const ShowOne = ({ image, nickname, real_name, id }) => {
  return (
    <Link to="/about" id={id} className={style.wrapper}>
      <div
        className={style.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={style.nickname}>&nbsp;&nbsp;{nickname}&nbsp;&nbsp;</div>
      <div className={style.real_name}>({real_name})</div>
    </Link>
  );
};

export default ShowOne;
