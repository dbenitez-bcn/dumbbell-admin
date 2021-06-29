<template>
  <div>
    <v-sheet outlined rounded class="pa-4">
      <div class="d-flex flex-row justify-space-between">
        <div class="d-flex flex-row">
          <h2 class="grey--text text--darken-1 mr-2">#{{ exercise.id }}</h2>
          <h2>{{ exercise.name }}</h2>
        </div>
        <EditBtn @click="toEdit" />
      </div>
      <div class="d-flex flex-row py-4">
        <v-card-subtitle class="pa-0 mr-2">Difficulty</v-card-subtitle>
        <DifficultDots :value="exercise.difficulty" />
      </div>
      <v-card-subtitle class="pa-0">Description</v-card-subtitle>
      <span>{{ exercise.description }}</span>
    </v-sheet>
    <div class="d-flex justify-center pt-4">
      <v-btn color="error" @click="deleteExercise">Delete</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, getModule, Prop } from "nuxt-property-decorator";
import ExerciseVM from "~/models/viewModels/ExerciseVM";
import DifficultDots from "./DifficultDots.vue";
import EditBtn from "~/components/ui/buttons/EditBtn.vue";
import ExerciseStore from "~/store/exercise";

@Component({
  components: {
    DifficultDots,
    EditBtn,
  },
})
export default class ExerciseDetails extends Vue {
  @Prop()
  exercise!: ExerciseVM;
  private toEdit() {
    this.$router.push(`/exercises/${this.exercise.id}/edit`);
  }

  private async deleteExercise() {
    if (window.confirm("Do you want to delete exercise?")) {
      await getModule(ExerciseStore, this.$store).delete(this.exercise.id);
      this.$router.push("/exercises");
    }
  }
}
</script>

<style lang="scss" scoped>
</style>