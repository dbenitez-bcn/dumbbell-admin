<template>
  <v-list-item link color="error" input-value="true" @click="logout">
    <v-list-item-icon>
      <v-icon color="error">mdi-power</v-icon>
    </v-list-item-icon>
    <v-list-item-title>Logout</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class NavigationBar extends Vue {
  async logout() {
    await this.$auth.logout();
  }
}
</script>

<style>
</style>