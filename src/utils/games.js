import axios from "axios";
import { basePath } from "./basePath.js";

export default class Game {
  async getAll() {
    return await axios.get(`${basePath}/games`).then(response => response);
  }
  async get(id) {
    return await axios
      .get(`${basePath}/games/` + id)
      .then(response => response);
  }
  async insert(id, body) {
    return await axios
      .post(`${basePath}/games/` + id, body)
      .then(response => response);
  }
  async delete(id) {
    return await axios
      .delete(`${basePath}/games/` + id)
      .then(response => response);
  }

  async update(id, body) {
    return await axios
      .update(`${basePath}/games/` + id, body)
      .then(response => response);
  }
}
