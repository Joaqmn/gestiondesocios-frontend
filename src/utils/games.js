import axios from "axios";

export default class Game {
  async getGames() {
    return await axios
      .get("https://api.chimaera.games/api/games")
      .then(response => response);
  }
  async getGame(ID) {
    return await axios
      .get("https://api.chimaera.games/api/games/" + ID)
      .then(response => response);
  }
  async insertGame(ID) {
    return await axios
      .post("https://api.chimaera.games/api/games/" + ID)
      .then(response => response);
  }
  async deleteGame(ID) {
    return await axios
      .delete("https://api.chimaera.games/api/games/" + ID)
      .then(response => response);
  }

  async updateGame(ID) {
    return await axios
      .update("https://api.chimaera.games/api/games/" + ID)
      .then(response => response);
  }
}
