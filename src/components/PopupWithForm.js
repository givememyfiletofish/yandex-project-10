import React from "react";
import ReactDOM from "react-dom";

class PopupWithForm extends React.Component {
  render() {
    return (
      <div className={`popup popup_type_${this.props.type} ${this.props.open}`}>
        <div className="popup__dialog-window">
          <button
            className="popup__close button"
            onClick={this.props.onClosePopup}
          ></button>
          <form
            className="popup__form"
            action="#"
            noValidate
            autoComplete="off"
          >
            <h2 className="popup__title">{this.props.title}</h2>
            <input
              className="popup__input popup__input_margin_top-input popup__input_type_name"
              id="name-input"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder={this.props.placeholder1}
              //   value="Jacques Cousteau"
              required
            />
            <span className="popup__input-error" id="name-input-error"></span>
            <input
              className="popup__input popup__input_margin_bottom-input popup__input_type_about-me"
              id="about-me-input"
              type="text"
              name="profession"
              minLength="2"
              maxLength="400"
              placeholder={this.props.placeholder2}
              //   value="Explorer"
              style={{ display: this.props.isDisplayed ? "block" : "none" }}
              required
            />
            <span
              className="popup__input-error"
              id="about-me-input-error"
              style={{ display: this.props.isDisplayed ? "block" : "none" }}
            ></span>
            <button
              className="popup__submit create-button button"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;
