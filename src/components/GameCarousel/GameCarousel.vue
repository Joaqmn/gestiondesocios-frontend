<template>
  <div id="partnerContainer" class="m-auto">
    <h2
      id="owner"
      class="m-auto tex-center text-red-800 font-bold font-Nunito text-lg"
    >
      {{ Owner }}
    </h2>
    <div class="flex">
      <label for="Todos" class="ml-auto mr-2 flex justify-start items-start">
        <div
          class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
        >
          <input
            aria-label="inputTodos"
            checked="true"
            disabled="true"
            type="checkbox"
            id="checkbutton1"
            class="opacity-0 absolute"
            @click="button1Check()"
          />
          <svg
            class="fill-current hidden w-4 h-4 text-red-800 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        <div class="select-none">Juegos</div>
      </label>
      <label for="Todos" class="mr-auto ml-2 flex justify-start items-start">
        <div
          class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
        >
          <input
            aria-label="inputPrestados"
            type="checkbox"
            id="checkbutton2"
            class="opacity-0 absolute"
            @click="button2Check()"
          />
          <svg
            class="fill-current hidden w-4 h-4 text-red-800 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        <div class="select-none">Prestados</div>
      </label>
    </div>
    <div id="carouselContainer" class="m-auto bg-gray-300 text-red-800">
      <splide :options="options" @splide:moved="moved">
        <splide-slide v-for="slide in slides" :key="slide.src">
          <img :src="slide.src" alt="slide.alt" />
        </splide-slide>
      </splide>
      <a id="partnerName" class="text-center block">Juego: {{ Nombre }}</a>
      <a id="partnerName" class="text-center block hidden"
        >Juego: {{ Nombre }}</a
      >
      <a id="partnerName" class="text-center block hidden"
        >Prestado a: {{ Nombre }}</a
      >
      <a id="partnerName" class="text-center block hidden"
        >Fecha de préstamo: {{ Nombre }}</a
      >
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { createSlides } from "../../utils/slides.js";
export default {
  name: "GameCarousel",
  components: {
    Splide,
    SplideSlide
  },

  data() {
    return {
      Nombre: "Nombre 1",
      Owner: "Owner 1",
      options: {
        rewind: true,
        gap: "1rem",
        width: "100%",
        heigh: "100%"
      },
      slides: createSlides()
    };
  },
  props: ["value"],
  methods: {
    moved(splide, newIndex) {
      console.log("moved", newIndex);
    },
    button1Check() {
      document.getElementById("checkbutton1").disabled = true;
      document.getElementById("checkbutton2").disabled = false;
      document.getElementById("checkbutton2").checked = false;
      this.$emit("input", 1);
    },
    button2Check() {
      document.getElementById("checkbutton2").disabled = true;
      document.getElementById("checkbutton1").disabled = false;
      document.getElementById("checkbutton1").checked = false;
      this.$emit("input", 2);
    }
  }
};
</script>

<style>
#carouselContainer {
  width: 400px;
  height: 235px;
  box-shadow: 3px 3px 10px #666;
  border: 11px outset #a42417;
  border-radius: 23px;
}

input:checked + svg {
  display: block;
}

#partnerContainer {
  height: 400px;
}

#partnerName {
  transform: translateY(20px);
}

#owner {
  justify-content: center;
  text-align: center;
}

#game {
  transform: translateX(40px);
}
</style>
