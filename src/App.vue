<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "./views/Login";

export default {
  name: "App",
  data() {
    return {
      title: "Estas en App.vue"
    };
  },
  components: {
    Login
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
</style>
