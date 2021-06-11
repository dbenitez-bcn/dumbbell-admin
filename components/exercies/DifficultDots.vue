<template>
  <div class="row-dots">
    <div
      class="border-dot"
      data-dt="full-dot"
      v-for="index in getFullDots()"
      :key="index*Math.random()"
    >
      <div class="full"></div>
    </div>
    <div
      class="border-dot"
      data-dt="empty-dot"
      v-for="index in getEmptyDots()"
      :key="index*Math.random()"
    >
      <div class="empty"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: Number
  },
  methods: {
    getFullDots: function() {
      return Math.round(+this.value / 2);
    },
    getEmptyDots: function() {
      return 5 - this.getFullDots();
    }
  }
});
</script>

<style lang="scss" scoped>
  $primary: var(--v-primary-base);

.full {
  width: 12px;
  height: 12px;
  background-color: $primary;
  border-radius: 50%;
}

.empty {
  width: 12px;
  height: 12px;
  background-color: transparent;
}

.border-dot {
  margin: 0px 1px;
  padding: 4px;
  border: 1px solid $primary;
  border-radius: 50%;
}

.row-dots {
  display: flex;
  flex-direction: row;
  padding: 0px 4px;
}
</style>