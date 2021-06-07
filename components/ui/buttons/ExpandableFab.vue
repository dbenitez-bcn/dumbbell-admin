<template>
  <div class="expandable-container" :class="getContainerClass()">
    <div data-dt="button" class="icon clickable" @click="toggle">
      <v-icon
        large
        class="icon ma-0 d-flex justify-center align-center"
        color="black"
        :class="getIconClass()"
      >
        mdi-plus
      </v-icon>
    </div>
    <slot v-if="isExpanded"></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";

@Component
export default class ExpandableFab extends Vue {
  private isExpanded = false;

  private toggle() {
    this.isExpanded = !this.isExpanded;
  }

  private getContainerClass() {
    if (this.isExpanded) {
      return "expanded";
    } else {
      return "collapsed";
    }
  }

  private getIconClass() {
    if (this.isExpanded) {
      return "rotate";
    } else {
      return "default";
    }
  }
}
</script>

<style lang="scss" scoped>
.expandable-container {
  position: absolute;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
}

.icon {
  width: 48px;
  height: 48px;
  margin: 4px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 99;
  display: block;
  transition: 0.5s;
}

.expanded {
  width: 400px;
  height: 650px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  transition: all 0.35s, border-radius 0.1s;
}

.collapsed {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--v-accent-base);
  transition: all 0.35s, border-radius 1s;
}

.default {
  transform: rotate(0deg);
}

.rotate {
  transform: rotate(-45deg);
}
</style>