<template>
  <div id="loading">
    <img
      class="img"
      src="../../assets/images/loading.gif"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style>
#loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  color: black;
  font-size: 32px;
  height: 100vh;
  width: 100vw;
  text-align: center;
  vertical-align: middle;
  line-height: 100vh;
  background-image: url("../../assets/images/bottomWave.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
</style>
