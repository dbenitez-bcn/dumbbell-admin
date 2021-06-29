<template>
  <div class="fill-parent d-flex flex-column justify-center align-center">
    <h1 class="grey--text" message>{{ message }}</h1>
    <svg class="kettly">
      <use xlink:href="~/assets/icons/kettly_sad.svg#kettly_sad" />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";

@Component
export default class KettlyError extends Vue {
  @Prop() readonly message!: string;
}
</script>

<style lang="scss" scoped>
.kettly {
  width: 250px;
  height: 250px;
  margin: 16px;
  fill: #E0E0E0;
}
</style>