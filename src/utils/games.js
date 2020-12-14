import axios from "axios";

const basePath = "https://api.chimaera.games/api";
export default class Game {
  async getAll() {
    return await axios.get("${basePath}/games").then(response => response);
  }
  async get(id) {
    return await axios
      .get("${basePath}/games/" + id)
      .then(response => response);
  }
  async insert(id, body) {
    return await axios
      .post("${basePath}/games/" + id, body)
      .then(response => response);
  }
  async delete(id) {
    return await axios
      .delete("${basePath}/games/" + id)
      .then(response => response);
  }

  async update(id, body) {
    return await axios
      .update("${basePath}/games/" + id, body)
      .then(response => response);
  }
}
