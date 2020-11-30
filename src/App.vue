<template>
  <div>
    <h1>{{ title }}</h1>
    <LoginButton />
  </div>
</template>

<script>
import LoginButton from "./components/LoginButton.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Estas en App.vue"
    };
  },
  components: {
    LoginButton
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
</style>
