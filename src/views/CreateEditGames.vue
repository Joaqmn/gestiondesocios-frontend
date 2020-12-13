<template>
  <div>
    <div class="flex h-screen" v-if="this.typeEvent === '/edit'">
      <div class=" my-auto mx-auto w-2/6 space-y-10">
        <input-group-game @changed="onChange" :gamesInfo="{ game: game }" />
        <div class="w-full flex justify-center ">
          <t-button @click="updateGameAPI" class="chColor">Update</t-button>
        </div>
      </div>
    </div>
    <div v-else>{{ this.$route.query.id }}</div>
    <div>{{ game }}</div>
    <t-alert variant="error" show>
      Something goes wrong
    </t-alert>
  </div>
</template>

<script>
import { getGame, updateGame } from "../domain/services/gamesServices";
import InputGroupGame from "@/components/inputGroupGame/InputGroupGame.vue";
import Swal from "sweetalert2";

export default {
  name: "CreateEditGames",
  components: {
    InputGroupGame
  },
  data() {
    return {
      typeEvent: this.$route.path,
      idGame: this.$route.query.id,
      game: {},
      gameName: "",
      updatedGame: {}
    };
  },

  methods: {
    validateProps() {
      if (
        (this.typeEvent === "/create" || this.typeEvent === "/edit") &&
        this.typeEvent === "/edit" &&
        this.idGame === undefined
      ) {
        console.error("Invalid props");
      }
    },
    onChange(value) {
      this.updatedGame = value.game;
    },
    updateGameAPI() {
      this.updatedGame.rating = parseFloat(this.updatedGame.rating);
      if (this.checkErrors()) {
        updateGame(this.updatedGame.id, this.updatedGame).then(response => {
          if (response.status === 200) {
            Swal.fire(
              "Hey user!",
              "Game was updated correctly!",
              "success"
            ).then(result => {
              if (result.isConfirmed) {
                window.location.href = "/inventory";
              }
            });
          } else {
            Swal.fire(
              "Hey user!",
              "There was an error connecting to the API",
              "error"
            );
          }
        });
      }
    },
    checkErrors() {
      const regexDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
      if (
        this.updatedGame.rating < 0 ||
        this.updatedGame.rating > 10 ||
        regexDate.test(this.updatedGame.entry_date) === false
      ) {
        Swal.fire(
          "Hey user!",
          "There was an error, check all the data",
          "error"
        );
        return false;
      }
      return true;
    }
  },
  watch: {
    $props: {
      immediate: true,
      handler() {
        this.validateProps();
      }
    }
  },
  beforeCreate: function() {
    getGame(this.$route.query.id)
      .then(response => {
        if (response.status === 200) {
          this.game = response.data;
          this.gameName = response.data.game_name;
        }
      })
      .catch(error => {
        window.location.href = "/inventory";
      });
  }
};
</script>

<style>
.chColor {
  background-color: #bb0e2e;
}
.chColor:hover {
  background-color: #960923;
}
</style>
