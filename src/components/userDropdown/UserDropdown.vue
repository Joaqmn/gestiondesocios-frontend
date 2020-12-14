<template>
  <div class="dropdown inline-block absolute top-2 right-8">
    <button
      aria-label="buttonHover"
      style="background: #bb0e2e"
      class="w-56 h-14 text-white font-semibold py-2 px-2 rounded inline-flex items-center border-2 border-white"
    >
      <span
        >Asociación<font-awesome-icon icon="user-circle" id="usercircle"
      /></span>
    </button>
    <ul class="dropdown-content absolute hidden text-gray-700 pt-1">
      <li>
        <a
          class="leading-10 w-56  h-14 rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 inline-block"
          href="#"
          @click="checkGoToInventory"
          >Inventario<font-awesome-icon icon="folder" id="folder"
        /></a>
      </li>
      <li>
        <a
          class="leading-10 w-56  h-14 rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block"
          href="#"
          @click="checkLogout"
          >Desconectar<font-awesome-icon icon="plug" id="plug"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserCircle);
library.add(faPlug);
library.add(faFolder);

export default {
  name: "UserDropdown",
  components: { FontAwesomeIcon },
  methods: {
    checkLogout() {
      Swal.fire({
        title: "Hey usuario!",
        text: "¿Estás seguro de que te quieres desconectar?",
        icon: "info",
        confirmButtonColor: "#bb0e2e",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    },
    checkGoToInventory() {
      Swal.fire({
        title: "Hey usuario!",
        text:
          "¿Estás seguro de que quieres salir " +
          (window.location.href.includes("edit") ||
          window.location.href.includes("create")
            ? "y dejar de editar este juego?"
            : "y volver al inventario?"),
        icon: "info",
        confirmButtonColor: "#bb0e2e",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.isConfirmed) {
          window.location.href = "/inventory";
        }
      });
    }
  }
};
</script>

<style scoped>
.dropdown:hover > .dropdown-content {
  display: block;
}
#usercircle {
  font-size: 28px;
  float: right;
  transform: translateX(260%);
}
#folder {
  font-size: 28px;
  float: right;
  transform: translateY(20%);
}
#plug {
  font-size: 28px;
  float: right;
  transform: translateY(20%);
}
</style>
