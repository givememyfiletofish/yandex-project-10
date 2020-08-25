import React from "react";
import ReactDOM from "react-dom";

export default class CardTemplate extends React.Component {
  handleClick = () => {
    console.log(this.props);
    this.props.onCardClick(this.props);
  };

  render() {
    return (
      <li className="elements__list-item">
        <button className="elements__trash button"></button>
        <img
          className="elements__image"
          src={this.props.link}
          alt="location"
          onClick={this.handleClick}
        />
        <div className="elements__title-container">
          <h2 className="elements__location-name">{this.props.name}</h2>
          <div className="elements__like-container">
            <button className="elements__like button"></button>
            <p className="elements__number-likes">{this.props.likes}</p>
          </div>
        </div>
      </li>
    );
  }
}
