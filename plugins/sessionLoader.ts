import { Context } from "@nuxt/types";
import { getModule } from "vuex-module-decorators";
import Constants from "~/src/core/Constants";
import SessionStore from "~/store/session";

export default function ({ store }: Context) {
    if (process.client) {
        const token = localStorage.getItem(Constants.storage.TOKEN_KEY) || "";

        getModule(SessionStore, store).setToken(token);
    }
}