<template>
  <button
    class="w-80 font-Nunito font-bold text-white text-xl border-solid 
    rounded-md p-2 hover:bg-red-200 focus:outline-none"
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
  box-shadow: 6px 6px 30px #999;
  background-color: #bb0e2e;
}
#loginButton:hover {
  background-color: #960923;
}
#loginButton:active {
  box-shadow: 5px 5px #666;
  transform: translateY(1px);
}
</style>
