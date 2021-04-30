import { Context } from "@nuxt/types";
import { getModule } from "vuex-module-decorators";
import Constants from "~/src/core/Constants";
import SessionStore from "~/store/session";

export default function ({ store }: Context) {
    getModule(SessionStore, store).setToken(localStorage.getItem(Constants.storage.TOKEN_KEY));
}