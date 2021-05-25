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
import { getModule } from "vuex-module-decorators";
import SessionStore from "~/store/session";

@Component
export default class NavigationBar extends Vue {
  logout() {
    getModule(SessionStore, this.$store).logout();
    this.$router.push("/access");
  }
}
</script>

<style>
</style>