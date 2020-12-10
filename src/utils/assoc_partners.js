import axios from "axios";

export default class Partners {
  async getPartners() {
    return await axios
      .get("https://api.chimaera.games/api/assoc_partners")
      .then(response => response);
  }
}

export default class Partner {
    async getPartner() {
        return await axios
        .get("")
    }
}
