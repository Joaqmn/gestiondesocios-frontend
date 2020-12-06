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
    <RadioButton />
    <UserDropdown />
  </div>
</template>

<script>
import LoginButton from "./components/LoginButton.vue";
import InputText from "./components/InputText";
import RadioButton from "./components/RadioButton";
import UserDropdown from "./components/UserDropdown";

export default {
  name: "App",
  data() {
    return {
      title: "Estas en App.vue"
    };
  },
  components: {
    LoginButton,
    InputText,
    RadioButton,
    UserDropdown
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
</style>
