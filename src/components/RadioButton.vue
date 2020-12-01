<template>
  <div class="w-40 h-12">
    <label class="block">
      <input
        id="radio1"
        type="radio"
        class="form-radio h-5 w-5 text-red-800"
        @click="radio1Check()"
      /><span class="ml-2 text-gray-700 font-Nunito font-bold"
        >Disponibles</span
      >
    </label>
    <label class="block">
      <input
        id="radio2"
        type="radio"
        class="form-radio h-5 w-5 text-red-800"
        @click="radio2Check()"
      /><span class="ml-2 text-gray-700 font-Nunito font-bold"
        >No disponibles</span
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  methods: {
    radio1Check() {
      document.getElementById("radio2").checked = false;
    },
    radio2Check() {
      document.getElementById("radio1").checked = false;
    }
  }
};
</script>

<style>
input[type="radio"]:checked {
  color: #9b2c2c;
}
</style>
