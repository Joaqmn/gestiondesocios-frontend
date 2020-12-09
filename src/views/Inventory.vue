<template>
  <div>{{ games[0].game_name }}</div>
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
      if (resp.status === 200) {
        this.games = resp.data;
      }
    });
  }
};
</script>

<style></style>
