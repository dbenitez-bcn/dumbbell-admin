<template>
  <div class="fill-box">
    <div class="grey lighten-2 cool-bg-top"></div>
    <div class="primary-dark cool-bg-bottom"></div>
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="7">
          <AccessCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AccessPage extends Vue {}
</script>
<style lang="scss" scoped>
.fill-box {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.cool-bg-top {
  width: 150%;
  height: 50vh;
  position: absolute;
  top: -55vh;
  transform: rotate(8deg);
}
.cool-bg-bottom {
  width: 150%;
  height: 50vh;
  position: absolute;
  bottom: -31vh;
  transform: rotate(-8deg);
  z-index: -1;
}
</style>
