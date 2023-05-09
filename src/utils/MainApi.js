class Api {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  async getUser() {
    const res = await fetch(`${this._url}/users/me`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });
      return this._checkResponse(res);
  }

  async createUser(name, email, password) {
    const res = await fetch(`${this._url}/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              name,
              email,
              password,
          }),
      });
      return this._checkResponse(res);
  }

  async login(email, password) {
    const res = await fetch(`${this._url}/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });
      return this._checkResponse(res);
  }

  async setNewUserInfo(name, email) {
    const res = await fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
      });
      return this._checkResponse(res);
  }

  async getMovies() {
    const res = await fetch(`${this._url}/movies`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });
      return this._checkResponse(res);
  }

  async createMovie(movie) {
    console.log(movie);
    const res = await fetch(`${this._url}/movies`, {
          method: 'POST',
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country: movie.country ?? '1',
            description: movie.description,
            director: movie.director,
            duration: movie.duration,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            nameEN: movie.nameEN ?? movie.nameRU,
            nameRU: movie.nameRU,
            trailerLink: movie.trailerLink
              ? movie.trailerLink
              : `https://www.youtube.com/results?search_query=трейлер+${movie.nameRU}`,
            year: movie.year,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
          })
      });
      return this._checkResponse(res);
  }

  async deleteMovie(id) {
    const res = await fetch(`${this._url}/movies/${id}`, {
          method: 'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });
      return this._checkResponse(res);
  }
}

const mainApi = new Api({
  url: 'https://api.sonja-diplom.nomoredomains.club',
});

export default mainApi;