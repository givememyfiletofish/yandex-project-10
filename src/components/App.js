import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (cardClicked) => {
    setImagePopup(true);
    setSelectedCard(cardClicked);
  };

  const handleClosePopups = () => {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setImagePopup(false);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopup(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopup(true);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopup(true);
  };

  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      handleClosePopups();
    }
  };

  document.addEventListener("keyup", handleEscKey);

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={(cardClicked) => {
          handleCardClick(cardClicked);
        }}
      />

      <Footer />

      {isEditAvatarPopupOpen && (
        <PopupWithForm
          onClosePopup={handleClosePopups}
          type="profile-pic"
          open="popup_opened"
          title="Change profile picture"
          placeholder1="Image Link"
          isDisplayed={false}
        />
      )}
      {isEditProfilePopupOpen && (
        <PopupWithForm
          onClosePopup={handleClosePopups}
          type="edit"
          open="popup_opened"
          title="Edit profile"
          placeholder1="Name"
          placeholder2="About me"
          isDisplayed={true}
        />
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          onClosePopup={handleClosePopups}
          type="add"
          open="popup_opened"
          title="New place"
          placeholder1="Title"
          placeholder2="Image Link"
          isDisplayed={true}
        />
      )}

      {isImagePopupOpen && (
        <PopupWithImage
          open="popup_opened"
          link={selectedCard.link}
          name={selectedCard.name}
          onClosePopup={handleClosePopups}
        />
      )}
    </div>
  );
}

export default App;
