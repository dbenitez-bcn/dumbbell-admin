<template>
  <v-form ref="form" v-model="valid" class="my-6">
    <h1 class="text-center">Create account</h1>
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
    <v-text-field
      v-model="passwordRepeat"
      :type="showRepeat ? 'text' : 'password'"
      :append-icon="showRepeat ? 'mdi-eye' : 'mdi-eye-off'"
      label="Repeat password"
      :rules="passwordRepeatRules"
      @click:append="showRepeat = !showRepeat"
      data-dt="password-repeat-input"
    ></v-text-field>
    <div class="d-flex justify-center">
      <v-btn
        :disabled="!valid"
        class="primary"
        @click="register"
        data-dt="submit-btn"
      >
        Register
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import SessionDTO from "~/src/models/types/SessionDTO";
import SessionStore from "~/store/session";

@Component
export default class RegisterForm extends Vue {
  private valid: boolean = false;
  private email: string = "";
  private password: string = "";
  private passwordRepeat: string = "";
  private show: boolean = false;
  private showRepeat: boolean = false;
  private emailRules = [
    (v: string) => !!v || "Email is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  private passwordRules = [
    (v: string) => !!v || "Password is required",
    (v: string) =>
      /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(v) ||
      "Password must be at least 8 characters and contain numbers and letters",
  ];

  get passwordRepeatRules() {
    return [
      (v: string) => (!!v && v) === this.password || "Passwords must be equal",
    ];
  }
  private async register() {
    await getModule(SessionStore, this.$store).register(
      new SessionDTO(this.email, this.password)
    );
  }
}
</script>

<style scoped>
</style>