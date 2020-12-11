import axios from "axios";

export default class Partners {
  async getPartners() {
    return await axios
      .get("https://api.chimaera.games/api/assoc_partners")
      .then(response => response);
  }
  async getPartner(ID) {
    return await axios
      .get("https://api.chimaera.games/api/assoc_partners/" + ID)
      .then(response => response);
  }
  async insertPartner(ID) {
    return await axios
      .post("https://api.chimaera.games/api/assoc_partners/" + ID)
      .then(response => response);
  }
  async deletePartner(ID) {
    return await axios
      .delete("https://api.chimaera.games/api/assoc_partners/" + ID)
      .then(response => response);
  }

  async updatePartner(ID) {
    return await axios
      .update("https://api.chimaera.games/api/assoc_partners/" + ID)
      .then(response => response);
  }
}
