<template>
  <v-card outlined class="mx-auto">
    <v-container>
      <v-row>
        <v-col cols="6" class="pa-0">
          <div
            class="tab clickable"
            :class="getLoginStateClass()"
            data-dt="login-tab"
            @click="setLogin()"
          >
            Login
          </div>
        </v-col>
        <v-col cols="6" class="pa-0">
          <div
            class="tab clickable"
            :class="getRegisterStateClass()"
            data-dt="register-tab"
            @click="setRegister()"
          >
            Register
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div data-dt="login-form" v-if="isLogin">login</div>
          <div data-dt="register-form" v-else>register</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AccessCard extends Vue {
  private isLogin: boolean = true;

  getLoginStateClass() {
    return this.isLogin
      ? "primary"
      : "grey lighten-2 grey--text text--lighten-6";
  }
  getRegisterStateClass() {
    return !this.isLogin
      ? "primary"
      : "grey lighten-2 grey--text text--lighten-6";
  }
  setLogin() {
    this.isLogin = true;
  }
  setRegister() {
    this.isLogin = false;
  }
}
</script><style lang="scss" scoped>
.tab {
  padding: 8px 0px;
  color: white;
  font-size: 1.5em;
  text-align: center;
  transition: 0.1s;
}
.clickable {
  cursor: pointer;
}
</style>