import axios from "axios";

const basePath = "https://api.chimaera.games/api";

export default class Partners {
  async getAll() {
    return await axios
      .get("${basePath}/assoc_partners")
      .then(response => response);
  }
  async get(id) {
    return await axios
      .get("${basePath}/assoc_partners/" + id)
      .then(response => response);
  }
  async insert(id, body) {
    return await axios
      .post("${basePath}/assoc_partners/" + id, body)
      .then(response => response);
  }
  async delete(id) {
    return await axios
      .delete("${basePath}/assoc_partners/" + id)
      .then(response => response);
  }

  async update(id, body) {
    return await axios
      .put("${basePath}/assoc_partners/" + id, body)
      .then(response => response);
  }
}
