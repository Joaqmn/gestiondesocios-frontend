import axios from "axios";

const basePath = "https://api.chimaera.games/api";
export default class Game {
  async getGames() {
    return await axios.get("${basePath}/games").then(response => response);
  }
  async getGame(id) {
    return await axios
      .get("${basePath}/games/" + id)
      .then(response => response);
  }
  async insertGame(id, body) {
    return await axios
      .post("${basePath}/games/" + id, body)
      .then(response => response);
  }
  async deleteGame(id) {
    return await axios
      .delete("${basePath}/games/" + id)
      .then(response => response);
  }

  async updateGame(id, body) {
    return await axios
      .update("${basePath}/games/" + id, body)
      .then(response => response);
  }
}
