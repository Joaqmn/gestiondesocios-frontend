import axios from "axios";

export default class Game {
  async getGames() {
    return await axios
      .get("https://api.chimaera.games/api/games")
      .then(response => response);
  }
  async getGame(id) {
    const url = "https://api.chimaera.games/api/games/" + id;
    return await axios.get(url).then(response => response);
  }

  async updateGame(id, body) {
    return await axios
      .put("https://api.chimaera.games/api/games/" + id, body)
      .then(response => response);
  }
  async deleteGame(id) {
    return await axios
      .delete("https://api.chimaera.games/api/games/" + id)
      .then(response => response);
  }
}
