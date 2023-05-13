class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  async getMovies() {
    const res = await fetch(`${this._url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return this._checkResponse(res);
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;