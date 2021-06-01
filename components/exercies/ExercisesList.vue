<template>
  <Spinner v-if="$fetchState.pending" />
  <KettlyError
    v-else-if="$fetchState.error"
    :message="'Kettly couldn\'t find exercises'"
  />
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
import Spinner from "../ui/Spinner.vue";
import KettlyError from "../ui/KettlyError.vue";

@Component({
  components: {
    Spinner,
    KettlyError,
  },
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