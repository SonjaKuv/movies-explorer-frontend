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

  async getUser(jwt) {
    const res = await fetch(`${this._url}/users/me`, {
          headers: {
              authorization: `Bearer ${jwt}`,
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
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
      });
      return this._checkResponse(res);
  }

  async getMovies() {
    const res = await fetch(`${this._url}/movies`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return this._checkResponse(res);
  }

  async createMovie(data) {
    const res = await fetch(`${this._url}/movies`, {
          method: 'POST',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: data.image,
            trailerLink: data.trailerLink,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            thumbnail: data.thumbnail,
            movieId: data.movieId,
            owner: data.owner,
          }),
      });
      return this._checkResponse(res);
  }

  async deleteMovie(data) {
    const res = await fetch(`${this._url}/movies/${data}`, {
          method: 'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return this._checkResponse(res);
  }
}

const mainApi = new Api({
  url: 'https://api.sonja-diplom.nomoredomains.club',
});

export default mainApi;