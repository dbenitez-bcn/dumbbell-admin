<template>
  <v-navigation-drawer permanent expand-on-hover app>
    <v-list nav dense>
      <v-list-item-group color="primary-dark">
        <v-list-item
          v-for="(item, i) in navButtons"
          :key="i"
          nuxt
          :to="item.to"
          :data-dt="item.title + '-nav-btn'"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <v-divider></v-divider>
      <logout-button />
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LogoutButton from "./LogoutButton.vue";

@Component({
  components: {
    LogoutButton,
  },
})
export default class NavigationBar extends Vue {
  private navButtons = [
    {
      icon: "mdi-dumbbell",
      to: "/exercises",
      title: "Exercises",
    },
    {
      icon: "mdi-toggle-switch",
      to: "/toggles",
      title: "Toggles",
    },
  ];
}
</script>

<style>
</style>