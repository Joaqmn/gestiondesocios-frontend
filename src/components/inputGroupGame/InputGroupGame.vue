<template>
  <div>
    <div class="flex flex-col space-y-10">
      <t-input-group label="Game name">
        <t-input
          v-model="gamesInfo.game.game_name"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group
        label="Rating"
        feedback="Value must be between 0 and 10"
        :variant="
          gamesInfo.game.rating > 0 && gamesInfo.game.rating < 10
            ? ''
            : 'danger'
        "
      >
        <t-input
          v-model="gamesInfo.game.rating"
          type="number"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group
        label="Date"
        feedback="Value must follow this format: yyyy-MM-dd hh:mm:ss"
        :variant="checkRegexDate(gamesInfo.game.entry_date) ? '' : 'danger'"
      >
        <t-input
          v-model="gamesInfo.game.entry_date"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group label="Comments">
        <t-input
          v-model="gamesInfo.game.comments"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group label="Image URL">
        <t-input
          v-model="gamesInfo.game.game_image"
          type="text"
          :change="onChange()"
        />
      </t-input-group>
    </div>
  </div>
</template>

<script>
const regexDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
export default {
  name: "InputGroupGame",
  props: {
    gamesInfo: {
      type: Object
    }
  },
  methods: {
    onChange() {
      this.$emit("changed", this.gamesInfo);
    },
    checkRegexDate(date) {
      if (date != undefined && date.match(regexDate)) {
        return true;
      }
    }
  }
};
</script>

<style></style>
