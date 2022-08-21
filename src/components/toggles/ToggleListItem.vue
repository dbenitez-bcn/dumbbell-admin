<template>
  <v-sheet
    outlined
    rounded
    class="
      toggle-card
      d-flex
      flex-row
      align-center
      justify-space-between
      px-2
      my-2
    "
  >
    <v-spacer class="py-3">
      <v-card-title data-dt="toggle-title" class="pa-0">{{
        toggle.name
      }}</v-card-title>
    </v-spacer>
    <div class="d-flex flex-row align-center">
      <v-switch
        data-dt="toggle-switch"
        v-model="toggle.value"
        @change="update"
      ></v-switch>
      <div class="ml-2"></div>
      <DeleteBtn @click="deleteToggle" />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { getModule } from "vuex-module-decorators";
import ToggleVM from "~/domain/viewModels/ToggleVM";
import DeleteBtn from "~/components/ui/buttons/DeleteBtn.vue";
import EditBtn from "~/components/ui/buttons/EditBtn.vue";
import ToggleStore from "~/store/toggles";
import ToggleUpdateDTO from "~/domain/types/ToggleUpdateDTO";

@Component({
  components: {
    DeleteBtn,
    EditBtn,
  },
})
export default class TogglesListItem extends Vue {
  @Prop()
  private readonly toggle!: ToggleVM;


  private async deleteToggle() {
    if (window.confirm("Do you want to delete toggle?")) {
      await getModule(ToggleStore, this.$store).delete(this.toggle.name);
    }
  }
  private async update(newValue: boolean) {
    await getModule(ToggleStore, this.$store).update(
      new ToggleUpdateDTO(this.toggle.name, newValue)
    );
  }
}
</script>

<style lang="scss" scoped>
.toggle-card {
  border-left: 8px $primary solid;
  transition: 0.1s;
}
.toggle-card:hover {
  border-left: 16px $primary solid;
}
</style>