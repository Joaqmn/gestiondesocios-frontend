<template>
  <button
    class="w-52 mx-2 font-Kalam font-bold text-white text-xl border-solid border-2 border-gray-500 rounded-md p-2 bg-red-800 hover:bg-red-700 focus:outline-none"
    @[mousedown]="pushedButton"
    id="loginButton"
  >
    Login
  </button>
</template>

<script>
export default {
  name: "LoginButton",
  data() {
    return {
      mousedown: "mousedown",
      mouseup: "mouseup"
    };
  },
  methods: {
    pushedButton() {
      const buttonId = document.getElementById("loginButton");
      buttonId.style.transform = "translateY(4px)";
    }
  }
};
</script>

<style></style>
