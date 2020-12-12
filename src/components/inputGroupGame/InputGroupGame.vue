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
      <t-input-group label="Rating" feedback="Value must be between 0 and 10">
        <t-input
          v-model="gamesInfo.game.rating"
          type="number"
          :change="onChange()"
        />
      </t-input-group>
      <t-input-group
        label="Date"
        feedback="Value must follow this format: yyyy-MM-dd hh:mm:ss"
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
    }
  }
};
</script>

<style></style>
