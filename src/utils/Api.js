class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  getUserInfo() {
    this._options.method = "GET";
    return fetch(`${this._baseUrl}users/me`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log("logged " + err);
      });
  }

  getInitialCards() {
    this._options.method = "GET";
    return fetch(`${this._baseUrl}cards`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addNewCard(newLocationData) {
    this._options.method = "POST";
    this._options.body = JSON.stringify({
      name: newLocationData.name,
      link: newLocationData.link,
    });

    return fetch(`${this._baseUrl}cards`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(cardToDelete) {
    this._options.method = "DELETE";
    return fetch(`${this._baseUrl}cards/${cardToDelete._cardID}`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setUserAvatar(newProfilePic) {
    this._options.method = "PATCH";
    this._options.body = JSON.stringify({
      avatar: newProfilePic["profile-pic"],
    });

    return fetch(`${this._baseUrl}users/me/avatar`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setUserInfo({ name, profession }) {
    this._options.method = "PATCH";
    this._options.body = JSON.stringify({
      name: name,
      about: profession,
    });

    return fetch(`${this._baseUrl}users/me`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setLikeForImage(card) {
    this._options.method = "PUT";

    return fetch(`${this._baseUrl}cards/likes/${card._id}`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeLikeForImage(card) {
    this._options.method = "DELETE";

    return fetch(`${this._baseUrl}cards/likes/${card._id}`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject("Error " + res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}



const api = new Api("https://around.nomoreparties.co/v1/group-3/", {
  headers: {
    authorization: "0519b525-02c0-4fb8-9c6d-6c37076de85e",
    "Content-Type": "application/json",
  },
});

export default api;