<template>
  <div>
    <UserDropdown />

    <div class="flex h-screen bg" v-if="this.typeEvent === '/edit'">
      <div class=" my-auto mx-auto w-2/6 space-y-10">
        <input-group-game @changed="onChange" :gamesInfo="{ game: game }" />
        <div class="w-full flex justify-center ">
          <t-button @click="updateGameAPI" class="chColor">Actualizar</t-button>
        </div>
      </div>
    </div>
    <div class="flex h-screen bg" v-else>
      <div class=" my-auto mx-auto w-2/6 space-y-10">
        <input-group-game @changed="onChange" :gamesInfo="{ game: game }" />
        <div class="w-full flex justify-center ">
          <t-button @click="createGameAPI" class="chColor"
            >Crear juego</t-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getGame,
  updateGame,
  insertGame
} from "../domain/services/gamesServices";
import InputGroupGame from "@/components/inputGroupGame/InputGroupGame.vue";
import UserDropdown from "../components/userDropdown/UserDropdown";

import Swal from "sweetalert2";

export default {
  name: "CreateEditGames",
  components: {
    InputGroupGame,
    UserDropdown
  },
  data() {
    return {
      typeEvent: this.$route.path,
      idGame: this.$route.query.id,
      game: {},
      gameName: "",
      updatedGame: {},
      nextId: this.$route.query.nextid
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
            Swal.fire({
              title: "Hey usuario!",
              text: "El juego se ha actualizado correctamente",
              icon: "success",
              confirmButtonColor: "#bb0e2e"
            }).then(result => {
              if (result.isConfirmed) {
                window.location.href = "/inventory";
              }
            });
          } else {
            Swal.fire(
              "Hey usuario!",
              "Hubo un error conectando a la API",
              "error"
            );
          }
        });
      }
    },
    createGameAPI() {
      this.updatedGame.rating = parseFloat(this.updatedGame.rating);
      this.updatedGame.id = Number(this.nextId);
      this.updatedGame.disponibility = true;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.updatedGame.id_owner = 1;
      console.log(this.updatedGame);
      if (this.checkErrors()) {
        insertGame(this.updatedGame).then(response => {
          if (response.status === 201) {
            Swal.fire({
              title: "Hey usuario!",
              text: "El juego se ha insertado correctamente",
              icon: "success",
              confirmButtonColor: "#bb0e2e"
            }).then(result => {
              if (result.isConfirmed) {
                window.location.href = "/inventory";
              }
            });
          } else {
            Swal.fire(
              "Hey usuario!",
              "Hubo un error conectando a la API",
              "error"
            );
          }
        });
      }
    },
    checkErrors() {
      const regexDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
      if (
        this.updatedGame.rating <= 0 ||
        this.updatedGame.rating >= 10 ||
        regexDate.test(this.updatedGame.entry_date) === false ||
        this.updatedGame.game_name.length === 0
      ) {
        Swal.fire(
          "Hey usuario!",
          "Hubo un error, comprueba la información",
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
    if (this.$route.query.id != undefined) {
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
  }
};
</script>

<style>
.bgColor {
  background-color: #bb0e2e7a;
}
.bgColor:hover {
  background-color: #bb0e2e;
}
.chColor {
  background-color: #bb0e2e;
}
.chColor:hover {
  background-color: #960923;
}
.bg {
  background-image: url("../assets/images/editCreateWave.svg");
  background-repeat: no-repeat;
  background-position: top;
}
</style>
