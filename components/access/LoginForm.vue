<template>
  <v-form ref="form" v-model="valid" class="my-6">
    <h1 class="text-center">Dumbbell</h1>
    <v-text-field
      v-model="email"
      label="Email"
      :rules="emailRules"
      data-dt="email-input"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :type="show ? 'text' : 'password'"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      label="Password"
      :rules="passwordRules"
      @click:append="show = !show"
      data-dt="password-input"
    ></v-text-field>
    <div class="d-flex justify-center">
      <v-btn
        :disabled="!valid"
        class="primary"
        @click="login"
        data-dt="submit-btn"
      >
        Login
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LoginForm extends Vue {
  private valid: boolean = false;
  private email: string = "";
  private password: string = "";
  private show: boolean = false;
  private emailRules = [
    (v: string) => !!v || "Email is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  private passwordRules = [(v: string) => !!v || "Password is required"];

  private async login() {
    await this.$auth.loginWith("local", {
      data: {
        email: this.email,
        password: this.password,
      },
    });
  }
}
</script>

<style scoped>
</style>