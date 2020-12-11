<template>
  <div class="flex h-screen cont w-full">
    <div class="mt-36 ml-8 w-1/6 absolute">
      <t-input placeholder="Search game..." name="my-input" v-model="search" />
      <CheckButton v-model="checkedValue" class="mt-10" />
    </div>
    <UserDropdown />

    <div class="ml-80 mt-7 w-5/6">
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
          'Disponibility',
          ''
        ]"
        :data="displayedPosts"
      >
        <template slot="row" slot-scope="{ trClass, tdClass, rowIndex, row }">
          <tr :class="[trClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
            <td :class="[tdClass]">
              {{ row.id }}
            </td>
            <td :class="[tdClass]">
              {{ row.game_name }}
            </td>
            <td :class="[tdClass]">
              {{ parseFloat(row.rating).toFixed(2) }}
            </td>
            <td :class="[tdClass]">
              {{ row.id_owner }}
            </td>
            <td :class="[tdClass]">
              {{ row.entry_date }}
            </td>
            <td :class="[tdClass]">
              {{ row.disponibility }}
            </td>
            <td :class="[tdClass, 'text-right']">
              <t-dropdown>
                <template slot="button">
                  <svg
                    version="1.1"
                    viewBox="0 0 16 16"
                    class="text-gray-600 fill-current svg-icon svg-fill"
                    heigth="20"
                    style="width: 20px;"
                  >
                    <path
                      pid="0"
                      d="M13 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 7zM8 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 7zM3 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 7z"
                    />
                  </svg>
                </template>
                <button
                  class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-red-800"
                >
                  Edit
                </button>
                <button
                  class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-red-800"
                >
                  Delete
                </button>
              </t-dropdown>
            </td>
          </tr>
        </template>
      </t-table>
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
import CheckButton from "../components/checkButton/CheckButton";
export default {
  name: "Inventory",
  data() {
    return {
      search: "",
      games: [],
      currentPage: 1,
      perPage: 12,
      pages: [],
      checkedValue: 1
    };
  },
  components: {
    UserDropdown,
    CheckButton
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
      return this.paginate(this.filteredDisponibility);
    },
    filteredList() {
      return this.games.filter(game => {
        return game.game_name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    filteredDisponibility() {
      return this.filteredList.filter(game => {
        if (this.checkedValue === 1) {
          return game;
        } else if (this.checkedValue === 2) {
          return game.disponibility == true;
        } else {
          return game.disponibility == false;
        }
      });
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
