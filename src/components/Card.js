import React from "react";
import ReactDOM from "react-dom";

class Card extends React.Component{
  constructor(
    item,
    templateSelector,
    viewFullImage,
    deleteCardPopup,
    userID,
    handleAddLike,
    handleRemoveLike,
    props
  ) {
    super(props);
    this._card = item;
    this._locationTitle = item.name;
    this._locationLink = item.link;
    this._templateSelector = templateSelector;
    this._viewFullImage = viewFullImage;
    this._cardID = item._id;
    this._deleteCardPopup = deleteCardPopup;
    this._userID = userID;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }


  _getTemplate() {
    return this._templateSelector
      .querySelector(".elements__list-item")
      .cloneNode(true);
  }

  _toggleLikedPicture() {
    if (this._likeButton.classList.contains("elements__like_liked")) {
      this._handleRemoveLike(this._card).then((data) => {
        this._likeButton.classList.remove("elements__like_liked");
        this._numberLikesText.textContent = data.likes.length;
      });
    } else {
      this._handleAddLike(this._card).then((data) => {
        this._likeButton.classList.add("elements__like_liked");
        this._numberLikesText.textContent = data.likes.length;
      });
    }
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".elements__like");
    this._trashButton = this._cardElement.querySelector(".elements__trash");
    this._likeButton.addEventListener("click", () => {
      this._toggleLikedPicture();
    });

    if (this._userID === this._card.owner._id) {
      this._trashButton.addEventListener("click", () => {
        this._deleteCardPopup(this);
      });
    } else {
      this._trashButton.remove();
    }

    this._locationImage.addEventListener("click", this._viewFullImage);
  }

  _checkIfImageIsLiked() {
    this._card.likes.some((user) => {
      if (this._userID === user._id) {
        this._likeButton.classList.add("elements__like_liked");
      } else {
        this._likeButton.classList.remove("elements__like_liked");
      }
    });
  }

  _checkHowManyLikes() {
    this._numberLikesText.textContent = this._card.likes.length;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._locationImage = this._cardElement.querySelector(".elements__image");
    this._locationName = this._cardElement.querySelector(
      ".elements__location-name"
    );
    this._numberLikesText = this._cardElement.querySelector(
      ".elements__number-likes"
    );

    this._locationImage.src = this._locationLink;
    this._locationImage.alt = this._locationTitle;
    this._locationName.textContent = this._locationTitle;
    this._setEventListeners();
    this._checkIfImageIsLiked();
    this._checkHowManyLikes();
    return this._cardElement;
  }




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

export default Card;
