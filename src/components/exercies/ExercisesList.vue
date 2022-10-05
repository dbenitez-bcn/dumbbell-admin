<template>
  <div>
    <h1>Exercises</h1>
    <Spinner v-if="$fetchState.pending" />  
    <div v-else-if="exercises.length > 0">
      <ExercisesListItem
        v-for="exercise of exercises"
        :key="exercise.id"
        :exercise="exercise"
      />
    </div>
    <KettlyError v-else :message="'Kettly couldn\'t find exercises'" />
    <v-pagination
      v-model="page"
      :length="length"
      @next="$fetch"
      @previous="$fetch"
      @input="$fetch"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ExerciseStore from "~/store/exercise";
import Spinner from "~/components/ui/Spinner.vue";
import KettlyError from "~/components/ui/KettlyError.vue";
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
  private page: number = 1;

  async fetch() {
    await getModule(ExerciseStore, this.$store).fetchExercises(this.page - 1);
  }

  get exercises() {
    return getModule(ExerciseStore, this.$store).exercises;
  }

  get length() {
    return getModule(ExerciseStore, this.$store).pages;
  }
}
</script>

<style lang="sass" scoped>
</style>