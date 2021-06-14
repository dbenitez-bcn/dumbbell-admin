<template>
  <div class="fill-parent">
    <v-form ref="form" v-model="isValid">
      <h2 class="text-center">Create exercise</h2>
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[(v) => !!v || 'Name is required']"
        data-dt="name-input"
      ></v-text-field>
      <v-textarea
        v-model="description"
        label="Description"
        auto-grow
        rows="1"
        :rules="[(v) => !!v || 'Description is required']"
        data-dt="description-input"
      ></v-textarea>
      <v-subheader class="pa-0">Difficulty</v-subheader>
      <v-slider
        v-model="difficulty"
        thumb-label
        min="1"
        max="10"
        ticks
        color="primary-dark"
        track-color="primary"
        data-dt="difficulty-input"
      ></v-slider>
      <div class="d-flex justify-center">
        <v-btn
          :disabled="!isValid"
          class="primary"
          @click="create"
          data-dt="submit-btn"
        >
          Create
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, getModule } from "nuxt-property-decorator";
import ExerciseStore from "~/store/exercise";
import ExerciseDTO from "~/src/models/types/ExerciseDTO";

@Component
export default class ExerciseCreationForm extends Vue {
  private isValid: boolean = false;
  private name: string = "";
  private description: string = "";
  private difficulty: number = 5;

  private async create() {
    await getModule(ExerciseStore, this.$store).create(
      new ExerciseDTO(this.name, this.description, this.difficulty)
    );
  }
}
</script>

<style lang="scss" scoped>
</style>