<template>
  <div class="flex h-screen cont w-full">
    <LoadingScreen v-if="isLoading"></LoadingScreen>

    <div class="mt-36 ml-8 w-1/6 absolute">
      <t-input
        placeholder="Buscar juego por nombre..."
        name="my-input"
        v-model="search"
      />
      <CheckButton v-model="checkedValue" class="mt-10" />
      <t-button @click="goToCreatePage" class="chColor mt-5 w-full m-auto"
        >Crear juego</t-button
      >
      <t-button @click="createPartner" class="chColor mt-2 w-full m-auto"
        >Añadir socio</t-button
      >
    </div>
    <UserDropdown />

    <div class="2xl:ml-80 xl:ml-48  mt-7 w-5/6">
      <img
        class="object-contain h-24 w-full mb-5"
        src="../assets/images/logo.png"
      />
      <t-table
        variant="thin"
        :headers="[
          'ID',
          'Nombre',
          'Puntuación',
          'ID Dueño',
          'Fecha entrada',
          'Disponibilidad',
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
            <td :class="[tdClass]" class="text-blue-500">
              <a :href="'partner?id=' + row.id_owner">
                {{ row.id_owner }}
              </a>
            </td>
            <td :class="[tdClass]">
              {{ row.entry_date }}
            </td>
            <td :class="[tdClass]">
              {{ row.disponibility == true ? "Disponible" : "No Disponible" }}
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
                  @click="
                    row.disponibility == true
                      ? borrowGame(row.id)
                      : returnGame(row.id)
                  "
                >
                  {{
                    row.disponibility == true
                      ? "Prestar juego"
                      : "Devolver juego"
                  }}<font-awesome-icon
                    class="float-right"
                    :icon="
                      row.disponibility == true ? 'door-open' : 'door-closed'
                    "
                  />
                </button>
                <button
                  class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-red-800"
                  @click="goToEditPage(row.id)"
                >
                  Editar<font-awesome-icon
                    class="float-right"
                    icon="pencil-alt"
                    id="pencil-alt"
                  />
                </button>
                <button
                  class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-red-800"
                  @click="deleteGameRow(row.id)"
                >
                  Borrar<font-awesome-icon
                    class="float-right"
                    icon="trash-alt"
                    id="trash-alt"
                  />
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
/* eslint-disable @typescript-eslint/camelcase */
import { getGames, deleteGame } from "../domain/services/gamesServices";
import {
  insertPartner,
  getPartners
} from "../domain/services/partnersServices";
import {
  insertBorrowedGame,
  deleteBorrowedGame
} from "../domain/services/borrowedGamesServices";
import UserDropdown from "../components/userDropdown/UserDropdown";
import CheckButton from "../components/checkButton/CheckButton";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilAlt,
  faTrashAlt,
  faDoorOpen,
  faDoorClosed
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Swal from "sweetalert2";

library.add(faPencilAlt);
library.add(faTrashAlt);
library.add(faDoorClosed);
library.add(faDoorOpen);

export default {
  name: "Inventory",
  data() {
    return {
      search: "",
      games: [],
      currentPage: 1,
      perPage: 10,
      pages: [],
      checkedValue: 1,
      partners: {},
      isLoading: true
    };
  },
  components: {
    UserDropdown,
    CheckButton,
    FontAwesomeIcon,
    LoadingScreen
  },
  methods: {
    borrowGame: function(id) {
      Swal.fire({
        title: "Selecciona el socio al que se le va a prestar el juego",
        input: "select",
        inputOptions: this.partners.map(partner => partner.id),
        inputPlaceholder: "Selecciona un socio",
        showCancelButton: true
      }).then(result => {
        console.log(result);
        const borrowedGame = {
          id_game: id,
          id_borrower: this.partners[Number(result.value)].id,
          borrow_date: String(this.getCurrentDate)
        };
        insertBorrowedGame(borrowedGame)
          .then(response => {
            if (response.status === 201) {
              Swal.fire(
                "Prestado",
                "El juego se ha prestado correctamente",
                "success"
              );
              window.location.href = "/inventory";
            }
          })
          .catch(() => {
            Swal.fire(
              "Error",
              "Error prestando el juego, inténtalo más tarde.",
              "error"
            );
          });
      });
    },
    returnGame(id) {
      deleteBorrowedGame(id)
        .then(response => {
          if (response.status === 200) {
            Swal.fire(
              "Devuelto",
              "El juego se ha devuelto correctamente",
              "success"
            );
            window.location.href = "/inventory";
          }
        })
        .catch(() => {
          Swal.fire(
            "Error",
            "Error devolviendo el juego, inténtalo más tarde.",
            "error"
          );
        });
    },
    goToEditPage: function(id) {
      window.location.href = "/edit?id=" + id;
    },
    goToCreatePage: function() {
      const nextID = Math.max(...this.games.map(game => game.id), 0) + 1;
      window.location.href = "/create?nextid=" + nextID;
    },
    createPartner: function() {
      Swal.fire({
        title: "Crear socio",
        input: "text",
        inputLabel: "Inserta el nombre del nuevo socio",
        showCancelButton: true,
        inputValidator: value => {
          if (!value) {
            return "Necesitas escribir el nombre";
          }
        }
      }).then(result => {
        const nextID =
          Math.max(...this.partners.map(partner => partner.id), 0) + 1;
        const partner = { id: nextID, partner_name: String(result.value) };
        insertPartner(partner)
          .then(resp => {
            if (resp.status === 201) {
              Swal.fire(
                "Insertado",
                "El socio se ha insertado correctamente con el ID " + nextID,
                "success"
              );
              window.location.href = "/inventory";
            }
          })
          .catch(() => {
            Swal.fire(
              "Error",
              "Error insertando el socio, inténtalo más tarde.",
              "error"
            );
          });
      });
    },
    deleteGameRow: function(id) {
      Swal.fire({
        title: "Usuario, estás seguro?",
        text: "Esta acción no se puede revertir",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, bórralo",
        cancelButtonText: "No, lo guardo",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.isConfirmed) {
          deleteGame(id)
            .then(resp => {
              if (resp.status === 200) {
                Swal.fire(
                  "Deleted",
                  "El juego se ha eliminado correctamente",
                  "success"
                );
                window.location.href = "/inventory";
              }
            })
            .catch(() => {
              Swal.fire(
                "Error",
                "Error eliminando el juego, inténtalo más tarde.",
                "error"
              );
            });
        } else {
          Swal.fire("Cancelado", "El juego sigue intacto", "info");
        }
      });
    },
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
    },
    getCurrentDate() {
      const actualDate = new Date(),
        dateFormat =
          [
            actualDate.getFullYear(),
            actualDate.getMonth() + 1,
            actualDate.getDate()
          ].join("/") +
          " " +
          [
            actualDate.getHours(),
            actualDate.getMinutes(),
            actualDate.getSeconds()
          ].join(":");
      return dateFormat;
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
    getPartners().then(response => {
      if (response.status === 200) {
        this.partners = response.data;
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
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
.cont {
  background-image: url("../assets/images/bottomWave.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
