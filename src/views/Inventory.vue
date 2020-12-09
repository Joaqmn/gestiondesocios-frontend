<template>
  <div></div>
</template>

<script>
import { getGames } from "../domain/services/gamesServices";
export default {
  name: "Inventory",
  data() {
    return { games: [] };
  },
  beforeCreate: function() {
    getGames().then(resp => {
      console.log(resp);
      if (resp.status === 200) {
        console.log(resp);
        //this.games = resp.data;
      }
    });
  }
};
</script>

<style></style>
