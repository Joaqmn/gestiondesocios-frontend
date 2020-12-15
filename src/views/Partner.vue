<template>
  <div class="h-screen cont">
    <UserDropdown />
    <div class="m-auto w-80 transform translate-y-32">
      <img class="object-contain h-48 w-full" src="../assets/images/logo.png" />
      <div id="partnerContainer" class="m-auto">
        <h2
          id="owner"
          class="m-auto tex-center text-red-800 font-bold font-Nunito text-lg"
        >
          {{ Owner }}
        </h2>
        <div class="flex">
          <label
            for="Todos"
            class="ml-auto mr-2 flex justify-start items-start"
          >
            <div
              class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
            >
              <input
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
          <label
            for="Todos"
            class="mr-auto ml-2 flex justify-start items-start"
          >
            <div
              class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
            >
              <input
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
    </div>
  </div>
</template>

<script>
import UserDropdown from "../components/userDropdown/UserDropdown";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { createSlides } from "../utils/slides.js";
import { getGames } from "../domain/services/gamesServices";
export default {
  name: "Partner",
  components: {
    UserDropdown,
    Splide,
    SplideSlide
  },
  data() {
    return {
      Nombre: "Nombre 1",
      Owner: "Owner 1",
      games: [],
      urls: [],
      options: {
        rewind: true,
        gap: "1rem",
        width: "100%",
        heigh: "100%"
      },
      slides: this.gameSlides()
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
    },
    getImages: function(id = this.$route.query.id) {
      this.games.forEach(item => {
        if (id === item.id_owner) {
          this.urls.push(item.game_image);
        }
      });
    },
    gameSlides: function(length = this.urls.length, sig = 0) {
      // eslint-disable-next-line prefer-spread
      return Array.apply(null, Array(length)).map((value, index) => {
        index = sig || index;

        return {
          src: `${this.urls}?sig=${index}`,
          alt: `Image ${index}`
        };
      });
    }
  },
  beforeMount: function() {
    getGames().then(resp => {
      if (resp.status === 200) {
        this.games = resp.data;
      }
    });
    this.getImages();
    this.gameSlides();
  }
};
</script>

<style scoped>
.cont {
  background-image: url("../assets/images/wave.svg");
  background-repeat: no-repeat;
  background-position: top;
}

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
