import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import { mainUrl } from "../../URL";
import getHeroInfo from "../../redux/getHeroAction";

class About extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    console.log(this.props.id);
    // this.props.getHeroInfo(mainUrl + "/" + this.props.id);
    axios.get(mainUrl + "/" + this.props.id).then(({ data }) =>
      this.setState({
        nickname: data.nickname,
        real_name: data.real_name,
        origin_description: data.origin_description,
        superpowers: data.superpowers,
        catch_phrase: data.catch_phrase,
        images: data.images,
      })
    );
  }

  render() {
    console.log(this.state.images);
    return (
      <div className={style.wrapper}>
        <div className={style.buttons}>
          <button
            className={style.backBtn}
            type="button"
            onClick={() => this.props.history.goBack()}
          >
            &lt; BACK
          </button>
          <Link to="/changeinfo" className={style.editBtn}>
            CHANGE INFO
          </Link>
        </div>

        <h1 className={style.header}>All about "{this.state.nickname}"</h1>
        <div className={style.about}>
          <div className={style.name}>Real name: {this.state.real_name}</div>
          <div className={style.superpowers}>
            Superpowers: {this.state.superpowers}
          </div>
          <div className={style.description}>
            About: {this.state.origin_description}
          </div>
          <div className={style.catch_phrase}>
            Catch phrase: {this.state.catch_phrase}
          </div>
          <div className={style.images}>
            {this.state.images.map((el, index) => {
              return <img src={el} alt={this.state.nickname} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    about: state.getHeroReducer,
    id: state.getCurrentHeroIdReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getHeroInfo: (url, id) => dispatch(getHeroInfo(url, id)),
  };
};

export default connect(mapState, mapDispatch)(About);
