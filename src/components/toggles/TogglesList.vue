<template>
  <Spinner v-if="$fetchState.pending" />
  <div v-else-if="toggles.length > 0">
    <h1>Toggles</h1>
    <ToggleListItem
      v-for="toggle of toggles"
      :key="toggle.name"
      :toggle="toggle"
    />
  </div>
  <KettlyError v-else :message="'Kettly couldn\'t find toggles'" />
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ToggleStore from "~/store/toggles";
import Spinner from "~/components/ui/Spinner.vue";
import KettlyError from "~/components/ui/KettlyError.vue";
import ToggleListItem from "./ToggleListItem.vue";

@Component({
  components: {
    Spinner,
    KettlyError,
    ToggleListItem,
  },
  fetchOnServer: false,
})
export default class TogglesList extends Vue {
  async fetch() {
    await getModule(ToggleStore, this.$store).fetchToggles();
  }

  get toggles() {
    return getModule(ToggleStore, this.$store).toggles;
  }
}
</script>

<style lang="sass" scoped>
</style>