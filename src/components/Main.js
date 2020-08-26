import React from "react";
import ReactDOM from "react-dom";
import api from "../utils/Api.js";
import Card from "./Card.js";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userDescription: "",
      userAvatar: "",
      cards: [],
    };
  }

  componentDidMount() {
    api.getUserInfo().then((result) => {
      this.setState({
        userName: result.name,
        userDescription: result.about,
        userAvatar: result.avatar,
      });
    });

    api.getInitialCards().then((result) => {
      this.setState({
        cards: result.map((location, index) => {
          return (
            <Card
              key={index}
              link={location.link}
              name={location.name}
              likes={location.likes.length}
              onCardClick={(cardProps) => {
                this.props.onCardClick(cardProps);
              }}
            />
          );
        }),
      });
    });
  }

  render() {
    return (
      <main>
        <section className="profile page__section">
          <img className="profile__avatar" src={this.state.userAvatar} alt="" />
          <button
            className="profile__avatar-button button"
            onClick={this.props.onEditAvatar}
          ></button>

          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{this.state.userName}</h1>
              <button
                className="profile__edit-button button"
                onClick={this.props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about-me">{this.state.userDescription}</p>
          </div>

          <button
            className="profile__add-button button"
            onClick={this.props.onAddPlace}
          ></button>
        </section>

        <section className="elements page__section">
          <ul className="elements__list">{this.state.cards}</ul>
        </section>
      </main>
    );
  }
}

export default Main;
