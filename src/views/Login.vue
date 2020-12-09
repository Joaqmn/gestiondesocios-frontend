<template>
  <div class="md:flex md:h-screen cont">
    <div class="md:m-auto w-80">
      <img class="object-contain h-48 w-full" src="../assets/images/logo.png" />
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
      <LoginButton />
    </div>
  </div>
</template>

<script>
import LoginButton from "../components/loginButton/LoginButton.vue";
import InputText from "../components/inputText/InputText";
export default {
  name: "App",
  components: {
    LoginButton,
    InputText
  }
};
</script>

<style scoped>
.cont {
  background-image: url("../assets/images/wave.svg");
  background-repeat: no-repeat;
}
</style>
