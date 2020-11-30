<template>
  <div>
    <h1>{{ title }}</h1>
    <LoginButton />
    <InputText
      typeInput="text"
      nameInput="Email"
      placeHolderInput="Introduzca su email"
    />
    <InputText
      typeInput="password"
      nameInput="Password"
      placeHolderInput="Introduzca su contraseña"
    />
    <InputText typeInput="text" />
  </div>
</template>

<script>
import LoginButton from "./components/LoginButton.vue";
import InputText from "./components/InputText";

export default {
  name: "App",
  data() {
    return {
      title: "Estas en App.vue"
    };
  },
  components: {
    LoginButton,
    InputText
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
</style>
