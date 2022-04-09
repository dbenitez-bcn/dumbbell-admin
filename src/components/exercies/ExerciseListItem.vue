<template>
  <v-sheet
    outlined
    rounded
    class="
      exercise-card
      d-flex
      flex-row
      align-center
      justify-space-between
      px-2
      my-2
    "
  >
  <v-spacer class="py-3 clickable" 
    @click="toDetails()">
    <v-card-title data-dt="exercise-title" class="pa-0">{{ exercise.name }}</v-card-title>
  </v-spacer>
    <div class="d-flex flex-row">
      <EditBtn @click="toEdit"/>
      <div class="ml-2"></div>
      <DeleteBtn @click="deleteExercise" />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ExerciseVM from "~/domain/viewModels/ExerciseVM";
import DeleteBtn from "~/components/ui/buttons/DeleteBtn.vue";
import EditBtn from "~/components/ui/buttons/EditBtn.vue";
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
    if (window.confirm("Do you want to delete exercise?")) {
      await getModule(ExerciseStore, this.$store).delete(this.exercise.id);
    }
  }
  private toDetails() {
    this.$router.push(`/exercises/${this.exercise.id}`);
  }
  private toEdit() {
    this.$router.push(`/exercises/${this.exercise.id}/edit`);
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