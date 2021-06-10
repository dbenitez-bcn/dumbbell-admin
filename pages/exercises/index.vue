<template>
  <div class="fill-parent pa-6">
    <ExercisesList />
    <ExpandableFab>
      <ExerciseCreationForm />
    </ExpandableFab>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ExercisesList from "~/components/exercies/ExercisesList.vue";
import ExerciseCreationForm from "~/components/exercies/ExerciseCreationForm.vue";
import ExpandableFab from "~/components/ui/buttons/ExpandableFab.vue";

@Component({
  components: {
    ExercisesList,
    ExpandableFab,
    ExerciseCreationForm
  },
})
export default class ExercisePage extends Vue {}
</script>

<style lang="sass" scoped>
</style>