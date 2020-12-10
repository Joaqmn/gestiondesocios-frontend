<template>
  <div id="carouselContainer" class="wrapper bg-gray-300 text-red-800">
    <splide :options="options" @splide:moved="moved">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt" />
      </splide-slide>
    </splide>
    <a
      class="align-top justify-center font-Nunito font-semibold"
      href=""
      >{{ gameName }}</a
    >
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { createSlides } from ".../utils/slides.js";
export default {
  name: "GameCarousel",
  components: {
    Splide,
    SplideSlide
  },

  data() {
    return {
      gameName: "Juego 1",
      options: {
        rewind: true,
        gap: "1rem",
        width: "100%",
        heigh: "100%"
      },
      slides: createSlides()
    };
  },
  methods: {
    moved(splide, newIndex) {
      console.log("moved", newIndex);
    }
  }
};
</script>

<style>
#carouselContainer {
  width: 400px;
  height: 260px;
  box-shadow: 3px 3px 10px #666;
  border: 11px outset #a42417;
  border-radius: 23px;
}
</style>
