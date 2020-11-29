<template>
  <div>
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
import InputText from "./components/InputText";
export default {
  name: "App",
  components: {
    InputText,
  },
};
</script>

<style></style>
