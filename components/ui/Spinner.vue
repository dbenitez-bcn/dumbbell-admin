<template>
    <div class="fill-parent d-flex justify-center align-center">
      <v-progress-circular
        indeterminate
        color="primary-dark"
        :size="80"
        :width="6"
      ></v-progress-circular>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";

@Component
export default class Spinner extends Vue {
    
}
</script>

<style lang="scss" scoped>
</style>