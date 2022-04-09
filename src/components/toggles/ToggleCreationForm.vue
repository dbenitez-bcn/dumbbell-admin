<template>
  <div class="fill-parent">
    <v-form ref="form" v-model="isValid">
      <h2 class="text-center">Create toggle</h2>
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[(v) => !!v || 'Name is required']"
        data-dt="name-input"
      ></v-text-field>
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
import TogglesStore from "~/store/toggles";
import ToggleDTO from "~/domain/types/ToggleDTO";

@Component
export default class ToggleCreationForm extends Vue {
  private isValid: boolean = false;
  private name: string = "";

  private async create() {
    await getModule(TogglesStore, this.$store).create(new ToggleDTO(this.name));
  }
}
</script>

<style lang="scss" scoped>
</style>