import axios from "axios";
import { basePath } from "./basePath.js";

export default class BorrowedGames {
  async get() {
    return await axios
      .get(`${basePath}/borrowedgames`)
      .then(response => response);
  }
  async insert(id, body) {
    return await axios
      .post(`${basePath}/borrowedgames/` + id, body)
      .then(response => response);
  }
  async delete(id) {
    return await axios
      .delete(`${basePath}/borrowedgames/` + id)
      .then(response => response);
  }
}
