<template>
  <v-card outlined class="mx-auto access-card">
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
          <div class="d-flex flex-column justify-center half-screen">
            <template v-if="isLogin"
              ><LoginForm data-dt="login-form" />
            </template>
            <template v-else><RegisterForm data-dt="register-form" /></template>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

@Component({
  components: {
    LoginForm,
    RegisterForm,
  },
})
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
.access-card {
  overflow: hidden;
}
.half-screen {
  min-height: 45vh;
}
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