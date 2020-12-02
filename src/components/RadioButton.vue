<template>
  <div class="w-40 h-12">
    <label class="block">
      <input id="radio1" type="radio" name="selection" class="h-5 w-5" /><span
        class="ml-2 text-gray-700 font-Nunito font-bold"
        >Disponibles</span
      >
    </label>
    <label class="block">
      <input id="radio2" type="radio" name="selection" class="h-5 w-5" /><span
        class="ml-2 text-gray-700 font-Nunito font-bold"
        >No disponibles</span
      >
    </label>
    <label class="block">
      <input id="radio3" type="radio" name="selection" class="h-5 w-5" /><span
        class="ml-2 text-gray-700 font-Nunito font-bold"
        >Todos</span
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton"
};
</script>

<style></style>
