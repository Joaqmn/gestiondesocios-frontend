<template>
  <div>
    <div class="flex flex-col space-y-10">
      <t-input-group label="Nombre del juego">
        <t-input
          v-model="gamesInfo.game.game_name"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group
        label="Puntuación"
        feedback="El valor debe ser entre 0 y 10"
        :variant="
          gamesInfo.game.rating >= 0 && gamesInfo.game.rating <= 10
            ? ''
            : 'danger'
        "
      >
        <t-input
          v-model="gamesInfo.game.rating"
          type="number"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group
        label="Fecha de entrada"
        feedback="La fecha debe seguir este formato: yyyy-MM-dd hh:mm:ss"
        :variant="checkRegexDate(gamesInfo.game.entry_date) ? '' : 'danger'"
      >
        <t-input
          v-model="gamesInfo.game.entry_date"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group label="Comments">
        <t-input
          v-model="gamesInfo.game.comments"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group label="Link de la imagen">
        <t-input
          v-model="gamesInfo.game.game_image"
          type="text"
          :change="onChange()"
        />
        <t-button
          label="Preview de la imagen"
          class="bgColor float-right w-7 h-7 leading-3 text-xs text-center mt-1 border-1 border-red-800"
          @click="showImagePreview"
        >
          <span class="-ml-2"> 🔎 </span>
        </t-button>
      </t-input-group>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const regexDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;

export default {
  name: "InputGroupGame",
  props: {
    gamesInfo: {
      type: Object
    }
  },
  methods: {
    onChange() {
      this.$emit("changed", this.gamesInfo);
    },
    checkRegexDate(date) {
      if (date != undefined && date.match(regexDate)) {
        return true;
      }
    },
    showImagePreview() {
      Swal.fire({
        imageUrl: this.gamesInfo.game.game_image,
        imageHeight: 500,
        imageAlt: "Imagen no encontrada"
      });
    }
  }
};
</script>

<style></style>
