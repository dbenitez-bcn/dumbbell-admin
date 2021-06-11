<template>
  <v-sheet
    outlined
    rounded
    class="
      exercise-card
      clickable
      d-flex
      flex-row
      align-center
      justify-space-between
      pa-2
      my-2
    "
    @click="toDetails()"
  >
    <v-card-title class="pa-0">{{ exercise.name }}</v-card-title>
    <div class="d-flex flex-row">
      <EditBtn />
      <div class="ml-2"></div>
      <DeleteBtn @delete="deleteExercise" />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ExerciseVM from "~/src/models/viewModels/ExerciseVM";
import DeleteBtn from "../ui/buttons/DeleteBtn.vue";
import EditBtn from "../ui/buttons/EditBtn.vue";
import ExerciseStore from "~/store/exercise";

@Component({
  components: {
    DeleteBtn,
    EditBtn,
  },
})
export default class ExercisesListItem extends Vue {
  @Prop()
  private readonly exercise!: ExerciseVM;

  private async deleteExercise() {
      // TODO: This triggers toDetails()
      // Check https://es.vuejs.org/v2/guide/events.html
    if (window.confirm("Do you want to delete exercise?")) {
      await getModule(ExerciseStore, this.$store).delete(this.exercise.id);
    }
  }
  private toDetails() {
    this.$router.push(`/exercises/${this.exercise.id}`);
  }
}
</script>

<style lang="scss" scoped>
.exercise-card {
  border-left: 8px $primary solid;
  transition: 0.1s;
}
.exercise-card:hover {
  border-left: 16px $primary solid;
}
</style>