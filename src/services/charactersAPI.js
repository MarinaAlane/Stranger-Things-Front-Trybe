import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const {
  REACT_APP_HAWKINS_URL,
  REACT_APP_HAWKINS_TIMEOUT,
  REACT_APP_UPSIDEDOWN_URL,
  REACT_APP_UPSIDEDOWN_TIMEOUT } = process.env;
class CharactersService {
  constructor({
    url = REACT_APP_HAWKINS_URL || REACT_APP_UPSIDEDOWN_URL,
    timeout = REACT_APP_HAWKINS_TIMEOUT || REACT_APP_UPSIDEDOWN_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
