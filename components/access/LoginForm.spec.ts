import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex, { Store } from 'vuex';
import Vuetify from 'vuetify'
import SessionDTO from "~/src/models/types/SessionDTO";
import { byDT } from "~/test/TestUtils";
import LoginForm from "./LoginForm.vue";

describe("Login form", () => {
    it("should login the user with the given inputs", async () => {
        const wrapper = shallowMount(LoginForm);

        expect(wrapper.vm).toBeTruthy();
    })
})