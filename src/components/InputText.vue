<template>
  <div class="container max-w-min">
    <label class="block border-gray-60">
      <span class="text-gray-700 uppercase font-bold float-right">{{
        nameInput
      }}</span>
      <input
        :type="typeInput"
        class="border py-2 px-3 text-white
      form-input mt-1 mb-10 block w-60 rounded-md bg-gray-900 focus:bg-gray-100 focus:text-gray-900"
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
      validator: (v) => v == "text" || v == "password",
    },
    nameInput: {
      type: String,
      required: false,
    },
    placeHolderInput: {
      type: String,
      required: false,
    },
  },

  methods: {
    setPlaceholder() {
      return this.typeInput == "text" ? "example@gmail.com" : "";
    },
  },
};
</script>

<style></style>
