<template>
  <div>
    <h1>{{ exercise.name }}</h1>
    <h1>{{ exercise.description }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import ExerciseVM from "~/src/models/viewModels/ExerciseVM";

@Component
export default class ExerciseDetails extends Vue {
  @Prop()
  exercise!: ExerciseVM;
}
</script>

<style lang="scss" scoped>
</style>