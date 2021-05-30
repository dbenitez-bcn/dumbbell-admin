<template>
  <p v-if="$fetchState.pending">
    <v-progress-circular
      indeterminate
      color="primary-dark"
    ></v-progress-circular>
  </p>
  <p v-else-if="$fetchState.error">
    <v-alert dense outlined type="error">
      An error occured while getting the exercises :(
    </v-alert>
  </p>
  <div v-else>
    <h1>Exercises</h1>
    <ul v-for="exercise of exercises" :key="exercise.id">
      <li>{{ exercise.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ExerciseStore from "~/store/exercise";

@Component
export default class ExercisesList extends Vue {
  async fetch() {
    await getModule(ExerciseStore, this.$store).fetchExercises();
  }

  get exercises() {
    return getModule(ExerciseStore, this.$store).exercises;
  }
}
</script>

<style lang="sass" scoped>
</style>