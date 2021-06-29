<template>
  <Spinner v-if="$fetchState.pending" />
  <div v-else-if="exercises.length > 0">
    <h1>Exercises</h1>
    <ExercisesListItem
      v-for="exercise of exercises"
      :key="exercise.id"
      :exercise="exercise"
    />
  </div>
  <KettlyError v-else :message="'Kettly couldn\'t find exercises'" />
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ExerciseStore from "../../store/exercise";
import Spinner from "../ui/Spinner.vue";
import KettlyError from "../ui/KettlyError.vue";
import ExercisesListItem from "./ExerciseListItem.vue";

@Component({
  components: {
    Spinner,
    KettlyError,
    ExercisesListItem,
  },
  fetchOnServer: false,
})
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