<template>
  <div class="h-screen cont">
    <UserDropdown />

    <div class="m-auto w-80 transform translate-y-32">
      <img class="object-contain h-48 w-full" src="../assets/images/logo.png" />
    </div>
    <div class="h-60"></div>
    <div class="">
      <GameCarousel class="m-auto" />
    </div>
  </div>
</template>

<script>
import UserDropdown from "../components/userDropdown/UserDropdown";
import GameCarousel from "../components/GameCarousel/GameCarousel";
export default {
  name: "Partner",
  components: {
    UserDropdown,
    GameCarousel
  }
};
</script>

<style scoped>
.cont {
  background-image: url("../assets/images/wave.svg");
  background-repeat: no-repeat;
  background-position: top;
}
</style>
