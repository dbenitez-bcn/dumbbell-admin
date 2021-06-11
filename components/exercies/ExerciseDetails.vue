<template>
  <v-sheet outlined rounded class="pa-6">
    <div class="row">
      <h2 class="grey--text text--darken-1 mr-2"
        >#{{ exercise.id }}</h2
      >
      <h2>{{ exercise.name }}</h2>
    </div>
<div class="row">
  <DifficultDots :value="exercise.difficulty"/>
</div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import ExerciseVM from "~/src/models/viewModels/ExerciseVM";
import DifficultDots from "./DifficultDots.vue";

@Component({
  components: {
    DifficultDots
  }
})
export default class ExerciseDetails extends Vue {
  @Prop()
  exercise!: ExerciseVM;
}
</script>

<style lang="scss" scoped>
</style>