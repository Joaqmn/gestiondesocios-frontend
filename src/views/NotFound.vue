<template>
  <div>
    <div
      class="h-screen w-screen bg-red-900 flex justify-center content-center flex-wrap"
    >
      <p class="font-sans text-white error-text">404</p>
    </div>

    <div
      class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl"
    >
      <span class="opacity-50">Llévame de vuelta a </span>
      <a class="border-b" href="/login">chimaera.games</a>
    </div>
  </div>
</template>

<script>
export default { name: "NotFound" };
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
.error-text {
  font-size: 130px;
}

@media (min-width: 768px) {
  .error-text {
    font-size: 220px;
  }
}
</style>
