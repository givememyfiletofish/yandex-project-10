import React from "react";
import ReactDOM from "react-dom";

export default class PopupWithImage extends React.Component {
  render() {
    return (
      <div className={`popup popup_type_image ${this.props.open}`}>
        <div className="popup__image-container">
          <button
            className="popup__close button"
            onClick={this.props.onClosePopup}
          ></button>
          <figure className="popup__figure-container">
            <img
              src={this.props.link}
              alt={this.props.name}
              className="popup__full-size-image"
            />
            <figcaption className="popup__image-caption">
              {this.props.name}
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
