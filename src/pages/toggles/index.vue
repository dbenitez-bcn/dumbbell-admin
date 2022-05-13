<template>
  <div class="fill-parent pa-6">
    <TogglesList/>
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
import TogglesList from "~/components/toggles/TogglesList.vue";

@Component({
  components: {
    ExpandableFab,
    ToggleCreationForm,
    TogglesList
  },
})
export default class TogglesPage extends Vue {}
</script>

<style lang="sass" scoped>
</style>