<template>
  <div>
    <label class="flex justify-start items-start">
      <div
        class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
      >
        <input
          type="checkbox"
          id="checkbutton1"
          class="opacity-0 absolute"
          @click="button1Check()"
        />
        <svg
          class="fill-current hidden w-4 h-4 text-red-800 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="select-none">Todos</div>
    </label>
    <label class="flex justify-start items-start">
      <div
        class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
      >
        <input
          type="checkbox"
          id="checkbutton2"
          class="opacity-0 absolute"
          @click="button2Check()"
        />
        <svg
          class="fill-current hidden w-4 h-4 text-red-800 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="select-none">Disponibles</div>
    </label>
    <label class="flex justify-start items-start">
      <div
        class="bg-white border-2 rounded border-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 mb-2"
      >
        <input
          type="checkbox"
          id="checkbutton3"
          class="opacity-0 absolute"
          @click="button3Check()"
        />
        <svg
          class="fill-current hidden w-4 h-4 text-red-800 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="select-none">No Disponibles</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckButton",

  methods: {
    button1Check() {
      document.getElementById("checkbutton2").checked = false;
      document.getElementById("checkbutton3").checked = false;
    },
    button2Check() {
      document.getElementById("checkbutton1").checked = false;
      document.getElementById("checkbutton3").checked = false;
    },
    button3Check() {
      document.getElementById("checkbutton1").checked = false;
      document.getElementById("checkbutton2").checked = false;
    }
  }
};
</script>

<style>
input:checked + svg {
  display: block;
}
</style>
