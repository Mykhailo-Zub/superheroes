import React, { Component } from "react";
import { connect } from "react-redux";
import getAllHeroes from "../../redux/getAllAction";
import getHeroInfo from "../../redux/getHeroAction";
import ShowOne from "../showOne/ShowOne.jsx";
import style from "./ShowAll.module.css";
import { mainUrl } from "../../URL";

class ShowAll extends Component {
  componentDidMount() {
    this.props.getAllHeroes(mainUrl);
  }

  showAbout(id) {
    console.log(id);
    this.props.getHeroInfo(mainUrl + "/" + id);
  }

  render() {
    const heroes = this.props.heroes;
    return (
      <div className={style.wrapper}>
        <h1 className={style.header}>All Superheroes</h1>
        <div className={style.heroContainer}>
          {heroes?.map((el, index) => {
            return (
              <div className={style.hero} key={index}>
                <button
                  className={style.heroButton}
                  key={index}
                  type="button"
                  onClick={this.showAbout.bind(this, el._id)}
                >
                  <ShowOne
                    key={el.id}
                    image={el.images[0]}
                    nickname={el.nickname}
                    real_name={el.real_name}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    heroes: state.getAllReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAllHeroes: (url) => dispatch(getAllHeroes(url)),
    getHeroInfo: (url, id) => dispatch(getHeroInfo(url, id)),
  };
};

export default connect(mapState, mapDispatch)(ShowAll);
