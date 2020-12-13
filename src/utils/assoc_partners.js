import axios from "axios";

export default class Partners {
  async getPartners() {
    return await axios
      .get("https://api.chimaera.games/api/assoc_partners")
      .then(response => response);
  }
  async getPartner(id) {
    return await axios
      .get("https://api.chimaera.games/api/assoc_partners/" + id)
      .then(response => response);
  }
  async insertPartner(id, body) {
    return await axios
      .post("https://api.chimaera.games/api/assoc_partners/" + id, body)
      .then(response => response);
  }
  async deletePartner(id) {
    return await axios
      .delete("https://api.chimaera.games/api/assoc_partners/" + id)
      .then(response => response);
  }

  async updatePartner(id, body) {
    return await axios
      .put("https://api.chimaera.games/api/assoc_partners/" + id, body)
      .then(response => response);
  }
}
