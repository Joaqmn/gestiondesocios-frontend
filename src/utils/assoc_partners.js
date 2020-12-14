import axios from "axios";

const basePath = "https://api.chimaera.games/api";

export default class Partners {
  async getPartners() {
    return await axios
      .get("${basePath}/assoc_partners")
      .then(response => response);
  }
  async getPartner(id) {
    return await axios
      .get("${basePath}/assoc_partners/" + id)
      .then(response => response);
  }
  async insertPartner(id, body) {
    return await axios
      .post("${basePath}/assoc_partners/" + id, body)
      .then(response => response);
  }
  async deletePartner(id) {
    return await axios
      .delete("${basePath}/assoc_partners/" + id)
      .then(response => response);
  }

  async updatePartner(id, body) {
    return await axios
      .put("${basePath}/assoc_partners/" + id, body)
      .then(response => response);
  }
}
