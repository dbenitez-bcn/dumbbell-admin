<template>
  <Spinner v-if="$fetchState.pending" />
  <KettlyError
    v-else-if="$fetchState.error"
    :message="'Kettly couldn\'t find the exercise'"
  />
  <div class="ma-6" v-else>
    <h1>{{ exercise.name }}</h1>
    <h1>{{ exercise.description }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, getModule } from "nuxt-property-decorator";
import ExerciseVM from "~/src/models/viewModels/ExerciseVM";
import ExerciseStore from "~/store/exercise";
import KettlyError from "~/components/ui/KettlyError.vue";
import Spinner from "~/components/ui/Spinner.vue";

@Component({
  components: {
    KettlyError,
    Spinner
  },
  fetchOnServer: false,
})
export default class ExerciseDetailsPage extends Vue {
  private exercise!: ExerciseVM;// | null = null;
  async fetch() {
    this.exercise = await getModule(ExerciseStore, this.$store).getById(
      Number(this.$route.params.id)
    );
  }
}
</script>

<style lang="scss" scoped>
</style>