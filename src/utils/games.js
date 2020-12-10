import axios from "axios";

export default class Game {
  async getGames() {
    return await axios
      .get("https://api.chimaera.games/api/games")
      .then(response => response);
  }
}
