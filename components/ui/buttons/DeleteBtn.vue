<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        outlined
        small
        fab
        color="error"
        v-bind="attrs"
        v-on="on"
        @click.stop="$emit('click')"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <span>Delete</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";

@Component
export default class DeleteBtn extends Vue {}
</script>

<style lang="scss" scoped>
</style>