import axios from "axios";

export default class BorrowedGames {
  async getBorrowedGames() {
    return await axios
      .get("https://api.chimaera.games/api/borrowedgames")
      .then(response => response);
  }
  async insertBorrowedGame(id) {
    return await axios
      .post("https://api.chimaera.games/api/borrowedgames/" + id)
      .then(response => response);
  }
  async deleteBorrowedGame(id) {
    return await axios
      .delete("https://api.chimaera.games/api/borrowedgames/" + id)
      .then(response => response);
  }
}
