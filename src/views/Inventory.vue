<template>
  <div class="flex h-screen cont">
    <UserDropdown />
    <div class="ml-72 mt-5 w-10/12">
      <img
        class="object-contain h-24 w-full mb-5"
        src="../assets/images/logo.png"
      />
      <t-table
        variant="thin"
        :headers="[
          'ID',
          'Name',
          'Rating',
          'ID Owner',
          'Date Creation',
          'Disponibility'
        ]"
        :data="displayedPosts"
      ></t-table>
      <t-pagination
        :total-items="games.length"
        :per-page="perPage"
        :limit="6"
        v-model="currentPage"
      />
    </div>
  </div>
</template>

<script>
import { getGames } from "../domain/services/gamesServices";
import UserDropdown from "../components/userDropdown/UserDropdown";
export default {
  name: "Inventory",
  data() {
    return {
      games: [],
      currentPage: 1,
      perPage: 19,
      pages: []
    };
  },
  components: {
    UserDropdown
  },
  methods: {
    setPages() {
      const numberOfPages = Math.ceil(this.games.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(games) {
      const page = this.currentPage;
      const perPage = this.perPage;
      const from = page * perPage - perPage;
      const to = page * perPage;
      return games.slice(from, to);
    }
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.games);
    }
  },
  watch: {
    posts() {
      this.setPages();
    }
  },
  beforeCreate: function() {
    getGames().then(resp => {
      if (resp.status === 200) {
        this.games = resp.data;
        this.games.map(function(item) {
          delete item.game_image;
          delete item.comments;
          return item;
        });
      }
    });
  },
  filters: {
    trimWords(value) {
      return (
        value
          .split(" ")
          .splice(0, 20)
          .join(" ") + "..."
      );
    }
  }
};
</script>

<style>
.cont {
  background-image: url("../assets/images/bottomWave.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
