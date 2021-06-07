<template>
  <div>
    <ExercisesList />
    <ExpandableFab> </ExpandableFab>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ExercisesList from "~/components/exercies/ExercisesList.vue";
import ExpandableFab from "~/components/ui/buttons/ExpandableFab.vue";

@Component({
  components: {
    ExercisesList,
    ExpandableFab,
  },
})
export default class ExercisePage extends Vue {}
</script>

<style lang="sass" scoped>
</style>