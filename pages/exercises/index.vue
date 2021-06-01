<template>
    <ExercisesList />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ExercisesList from "~/components/exercies/ExercisesList.vue";

@Component({
  components: {
    ExercisesList,
  },
})
export default class ExercisePage extends Vue {}
</script>

<style lang="sass" scoped>
</style>