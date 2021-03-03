import React from "react";
import { connect } from "react-redux";
import style from "./About.module.css";

const About = (props) => {
  console.log(props);
  const {
    nickname,
    real_name,
    superpowers,
    origin_description,
    catch_phrase,
    images,
  } = props.about;
  return (
    <div className={style.wrapper}>
      <button
        className={style.backBtn}
        type="button"
        onClick={() => props.history.goBack()}
      >
        &lt; BACK
      </button>
      <h1 className={style.header}>All about "{nickname}"</h1>
      <div className={style.about}>
        <div className={style.name}>Real name: {real_name}</div>
        <div className={style.superpowers}>Superpowers: {superpowers}</div>
        <div className={style.description}>About: {origin_description}</div>
        <div className={style.catch_phrase}>Catch phrase: {catch_phrase}</div>
        <div className={style.images}>
          {images.map((el, index) => {
            return <img src={el} alt={nickname} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    about: state.getHeroReducer,
  };
};

export default connect(mapState, null)(About);
