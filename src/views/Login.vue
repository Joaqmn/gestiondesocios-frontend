<template>
  <div class="flex h-screen cont">
    <div class="m-auto w-80">
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
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
.cont {
  background-image: url("../assets/images/wave.svg");
  background-repeat: no-repeat;
  background-position: top;
}
</style>
