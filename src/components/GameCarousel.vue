<template>
  <div id="carouselContainer" class="wrapper">
    <splide :options="options" @splide:moved="moved">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { createSlides } from "../utils/slides.js";
export default {
  name: "GameCarousel",
  components: {
    Splide,
    SplideSlide
  },

  data() {
    return {
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
    width: 200px;
    height: 150px;
}
</style>
