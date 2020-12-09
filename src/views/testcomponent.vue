<template><div>
  <UserDropdown />
  <CheckButton />
  </div>
</template>

<script>
import UserDropdown from "../components/userDropdown/UserDropdown.vue";
import CheckButton from "../components/checkButton/CheckButton.vue";
export default {
  name: "testcomponent",
  components: {
    UserDropdown,
    CheckButton
  }
};
</script>

<style></style>
