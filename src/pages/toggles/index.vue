<template>
  <div class="fill-parent pa-6">
    <h1>Toggles</h1>
    <ExpandableFab>
      <ToggleCreationForm />
    </ExpandableFab>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ExpandableFab from "~/components/ui/buttons/ExpandableFab.vue";
import ToggleCreationForm from "~/components/toggles/ToggleCreationForm.vue";

@Component({
  components: {
    ExpandableFab,
    ToggleCreationForm
  },
})
export default class TogglesPage extends Vue {}
</script>

<style lang="sass" scoped>
</style>