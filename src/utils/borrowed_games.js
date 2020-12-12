import axios from "axios";

export default class BorrowedGames {
  async getBorrowedGames() {
    return await axios
      .get("https://api.chimaera.games/api/borrowedgames")
      .then(response => response);
  }
  async insertBorrowedGame(ID) {
    return await axios
      .post("https://api.chimaera.games/api/borrowedgames/" + ID)
      .then(response => response);
  }
  async deleteBorrowedGame(ID) {
    return await axios
      .delete("https://api.chimaera.games/api/borrowedgames/" + ID)
      .then(response => response);
  }
}
