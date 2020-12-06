<template>
  <div class="container max-w-min">
    <label class="block border-gray-60">
      <span class="text-gray-700 uppercase font-bold float-right">{{
        nameInput
      }}</span>
      <input
        :type="typeInput"
        class="border py-2 px-3 text-black
      form-input mt-1 mb-10 block w-80 rounded-md placeholder-gray-700 focus:placeholder-white"
        :placeholder="placeHolderInput"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    typeInput: {
      type: String,
      required: true,
      validator: v => v == "text" || v == "password"
    },
    nameInput: {
      type: String,
      required: false
    },
    placeHolderInput: {
      type: String,
      required: false
    }
  }
};
</script>

<style>
input {
  background: #b3adab;
}
input:focus {
  color: white;
  background-color: #bb0e2e;
}
::placeholder {
  color: white;
  opacity: 1;
}
</style>
