<template>
  <div class="h-screen cont">
    <UserDropdown />
    <div class="m-auto transform translate-y-20">
      <img class="object-contain h-48 w-full" src="../assets/images/logo.png" />
      <div id="gameContainer" class="m-auto rounded-lg flex mt-10">
        <div
          id="carouselContainer"
          class="ml-3 bg-gray-300 text-red-800 inline-block"
        >
          <splide :options="options" @splide:moved="moved" :slides="slides">
            <splide-slide
              id="splideContainer"
              v-for="slide in slides"
              :key="slide.src"
            >
              <img id="slideImg" :src="slide.src" alt="slide.alt" />
            </splide-slide>
          </splide>
        </div>
        <div
          id="gameInfoContainer"
          class="inline-block m-auto w-64 h-64 flex-column"
        >
          <div>
            <div
              id="owner"
              class="m-auto mb-4 tex-center text-red-800 font-bold font-Nunito text-lg"
            >
              {{ partner[0] }}
            </div>
            <div class="flex mt-3 mb-3">
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
            <a id="gameInfo" class="text-center block"
              >Juego: {{ gameName[gameIndex] }}</a
            >
            <a id="gameInfo" class="text-center block"
              >Juego Prestado: {{ gameName }}</a
            >

            <a id="gameInfo" class="text-center block"
              >Fecha de préstamo: {{ gameName }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserDropdown from "../components/userDropdown/UserDropdown";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { getGames } from "../domain/services/gamesServices";
import { getPartners } from "../domain/services/assocPartnersServices";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "Partner",
  components: {
    UserDropdown,
    Splide,
    SplideSlide
  },
  data() {
    return {
      games: [],
      urls: [],
      gameName: [],
      gameIndex: "0",
      partners: [],
      partner: [],
      options: {
        rewind: true,
        gap: "1rem"
      },
      slides: []
    };
  },
  props: ["value"],
  methods: {
    moved(splide, newIndex) {
      console.log("moved", newIndex);
      this.gameIndex = newIndex;
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
    getImages: function() {
      const id = parseInt(this.$route.query.id);
      this.urls = this.games
        .filter(game => id === game.id_owner)
        .map(game => game.game_image);
    },
    getGameName: function() {
      const id = parseInt(this.$route.query.id);
      this.gameName = this.games
        .filter(game => id === game.id_owner)
        .map(game => game.game_name);
      console.log(this.gameName);
    },
    gameSlides: function() {
      const slides = this.urls.map((url, index) => {
        return {
          src: `${url}?sig=${index}`,
          alt: `Image ${index}`
        };
      });
      this.slides = slides;
    },
    partnerName: function() {
      const id = parseInt(this.$route.query.id);
      this.partner = this.partners
        .filter(partner => id === partner.id)
        .map(partner => partner.partner_name);
    }
  },
  computed: {},
  beforeMount: function() {
    getGames().then(res => {
      if (res.status === 200) {
        this.games = res.data;
        this.getImages();
        this.gameSlides();
        this.getGameName();
      }
    });
    getPartners().then(res => {
      if (res.status === 200) {
        this.partners = res.data;
        console.log(this.partners);
        this.partnerName();
      }
    });
  }
};
</script>
<style scoped>
.cont {
  background-image: url("../assets/images/wave.svg");
  background-repeat: no-repeat;
  background-position: top;
}
#gameContainer {
  width: 900px;
  height: 665px;
}
#carouselContainer {
  width: 500px;
  height: 665px;
  box-shadow: 3px 3px 10px #000;
  border: 11px outset #a42417;
  border-radius: 23px;
}
#slideImg {
  width: 100%;
  height: 100%;
}
#splideContainer {
  width: 478px;
  height: 478px;
}
input:checked + svg {
  display: block;
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
