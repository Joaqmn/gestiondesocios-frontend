<template>
  <button
    class="w-52 mx-2 font-Nunito font-bold text-white text-xl border-solid border-2 border-gray-500 rounded-md p-2 bg-red-800 hover:bg-red-700 focus:outline-none"
    id="loginButton"
  >
    Login
  </button>
</template>

<script>
export default {
  name: "LoginButton"
};
</script>

<style>
#loginButton {
  box-shadow: 3px 3px #999;
}
#loginButton:active {
  box-shadow: 5px 5px #666;
  transform: translateY(1px);
}
</style>
