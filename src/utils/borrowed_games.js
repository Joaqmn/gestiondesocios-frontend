import axios from "axios";

const basePath = "https://api.chimaera.games/api";
export default class BorrowedGames {
  async getBorrowedGames() {
    return await axios
      .get("${basePath}/borrowedgames")
      .then(response => response);
  }
  async insertBorrowedGame(id, body) {
    return await axios
      .post("${basePath}/borrowedgames/" + id, body)
      .then(response => response);
  }
  async deleteBorrowedGame(id) {
    return await axios
      .delete("${basePath}/borrowedgames/" + id)
      .then(response => response);
  }
}
