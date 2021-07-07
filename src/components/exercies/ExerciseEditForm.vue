<template>
  <v-form ref="form" v-model="isValid">
    <v-sheet outlined rounded class="pa-4">
      <div class="d-flex flex-row align-center">
        <h2 class="grey--text text--darken-1 mr-2">#{{ exercise.id }}</h2>
        <v-text-field
          v-model="exercise.name"
          :rules="[(v) => !!v || 'Name is required']"
          data-dt="name-input"
        ></v-text-field>
      </div>
      <div class="d-flex flex-row py-4">
        <v-card-subtitle class="pa-0 mr-2">Difficulty</v-card-subtitle>
        <DifficultDots :value="exercise.difficulty" />
      </div>
      <v-slider
        v-model="exercise.difficulty"
        thumb-label
        min="1"
        max="10"
        ticks
        color="primary-dark"
        track-color="primary"
      ></v-slider>
      <v-card-subtitle class="pa-0">Description</v-card-subtitle>
      <v-textarea
        v-model="exercise.description"
        auto-grow
        rows="1"
        :rules="[(v) => !!v || 'Description is required']"
        data-dt="description-input"
      ></v-textarea>
    </v-sheet>
    <div class="d-flex justify-center pt-4">
      <v-btn
        :disabled="!isValid"
        color="primary"
        @click="update"
        data-dt="update-btn"
        >Updatee</v-btn
      >
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, getModule, Prop } from "nuxt-property-decorator";
import ExerciseVM from "~/domain/viewModels/ExerciseVM";
import DifficultDots from "./DifficultDots.vue";
import EditBtn from "~/components/ui/buttons/EditBtn.vue";
import ExerciseStore from "~/store/exercise";
import ExerciseDTO from "~/domain/types/ExerciseDTO";

@Component({
  components: {
    DifficultDots,
    EditBtn,
  },
})
export default class ExerciseEditForm extends Vue {
  @Prop()
  exercise!: ExerciseVM;
  private isValid: boolean = false;

  private async update() {
    await getModule(ExerciseStore, this.$store).update(
      new ExerciseDTO(
        this.exercise.name,
        this.exercise.description,
        this.exercise.difficulty,
        this.exercise.id
      )
    );
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
</style>