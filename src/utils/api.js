class Api {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }


}

const apiConfig = {
    url: "https://mesto.nomoreparties.co/v1/cohort-46",
    headers: {
      authorization: "fc76fdb8-e2ba-4757-a444-c4106fd529da",
      "Content-Type": "application/json",
    },
  };
  
const api = new Api(apiConfig);

export default api;