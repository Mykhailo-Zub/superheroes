import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./ChangeInfo.module.css";
import getAllHeroes from "../../redux/getAllAction";
import { mainUrl } from "../../URL";
import addNew from "../../redux/addNewAction";
import postHero from "../../redux/postHeroAction";

class AddNew extends Component {
  state = {
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    images: [],
  };

  componentDidMount() {
    this.props.getAllHeroes(mainUrl);
  }

  handleNicknameChange = (e) => {
    this.setState({
      nickname: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      real_name: e.target.value,
    });
  };

  handleBioChange = (e) => {
    this.setState({
      origin_description: e.target.value,
    });
  };

  handlePowersChange = (e) => {
    this.setState({
      superpowers: e.target.value,
    });
  };

  handlePhraseChange = (e) => {
    this.setState({
      catch_phrase: e.target.value,
    });
  };

  handlePhotoChange = (e) => {
    this.setState({
      images: e.target.value.split(","),
    });
  };

  addSuperhero = () => {
    if (
      this.state.nickname &&
      this.state.real_name &&
      this.state.origin_description &&
      this.state.superpowers &&
      this.state.catch_phrase &&
      this.state.images[0]
    ) {
      this.props.addNew(this.state);
      this.props.postHero(mainUrl);
      this.setState({
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: [],
      });
    }
  };

  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.header}>Add new Superhero</h1>
        <input
          className={style.input}
          type="text"
          onChange={(e) => this.handleNicknameChange(e)}
          placeholder="Hero's nickname"
          value={this.state.nickname}
        />
        <input
          className={style.input}
          type="text"
          onChange={(e) => this.handleNameChange(e)}
          placeholder="Hero's name"
          value={this.state.real_name}
        />
        <textarea
          className={style.input + " " + style.textarea}
          type="text"
          onChange={(e) => this.handleBioChange(e)}
          placeholder="Hero's biography"
          value={this.state.origin_description}
        />
        <textarea
          className={style.input + " " + style.textarea}
          type="text"
          onChange={(e) => this.handlePowersChange(e)}
          placeholder="Hero's superpowers"
          value={this.state.superpowers}
        />
        <textarea
          className={style.input + " " + style.textarea}
          type="text"
          onChange={(e) => this.handlePhraseChange(e)}
          placeholder="Hero's catch phrase"
          value={this.state.catch_phrase}
        />
        <textarea
          className={style.input + " " + style.textarea}
          type="text"
          onChange={(e) => this.handlePhotoChange(e)}
          placeholder="Hero's photo link. You can add multiple photos using comma as separator"
          value={this.state.images}
        />
        <button
          type="button"
          className={style.submitButton}
          onClick={this.addSuperhero}
        >
          Add new Superhero
        </button>
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
    addNew: (data) => dispatch(addNew(data)),
    postHero: (url) => dispatch(postHero(url)),
  };
};

export default connect(mapState, mapDispatch)(AddNew);
