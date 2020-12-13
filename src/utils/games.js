import axios from "axios";

export default class Game {
  async getGames() {
    return await axios
      .get("https://api.chimaera.games/api/games")
      .then(response => response);
  }
  async getGame(id) {
    return await axios
      .get("https://api.chimaera.games/api/games/" + id)
      .then(response => response);
  }
  async insertGame(id) {
    return await axios
      .post("https://api.chimaera.games/api/games/" + id)
      .then(response => response);
  }
  async deleteGame(id) {
    return await axios
      .delete("https://api.chimaera.games/api/games/" + id)
      .then(response => response);
  }

  async updateGame(id) {
    return await axios
      .update("https://api.chimaera.games/api/games/" + id)
      .then(response => response);
  }
}
