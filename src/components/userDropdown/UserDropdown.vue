<template>
  <div class="dropdown inline-block absolute top-2 right-8">
    <button
      aria-label="buttonHover"
      style="background: #bb0e2e"
      class="w-48 h-14 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
    >
      <span
        >{{ userName }}<font-awesome-icon icon="user-circle" id="usercircle"
      /></span>
    </button>
    <ul class="dropdown-content absolute hidden text-gray-700 pt-1">
      <li>
        <a
          class="leading-10 w-48 h-14 rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 inline-block"
          href="#"
          >Perfil<font-awesome-icon icon="align-justify" id="alignjustify"
        /></a>
      </li>
      <li>
        <a
          class="leading-10 w-48 h-14 rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block"
          href="#"
          >Logout<font-awesome-icon icon="plug" id="plug"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserCircle);
library.add(faAlignJustify);
library.add(faPlug);

export default {
  name: "UserDropdown",
  data: function() {
    return {
      userName: "Joaquín"
    };
  },
  components: { FontAwesomeIcon }
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
#alignjustify {
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
