import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import SessionDTO from "~/models/types/SessionDTO";
import { byDT } from "~~/test/TestUtils";
import RegisterForm from "./RegisterForm.vue";

describe("Register form", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const sessionStore = {
        namespaced: true,
        actions: {
            register: jest.fn()
        }
    };
    const store = new Vuex.Store({
        modules: {
            session: sessionStore
        }
    });
    const sut = mount(RegisterForm, {
        store,
        localVue,
        vuetify: new Vuetify()
    })
    it("should register the user with the given inputs", async () => {
        sut.find(byDT("email-input")).setValue("email@email.com");
        sut.find(byDT("password-input")).setValue("Passw0rd");
        sut.find(byDT("password-repeat-input")).setValue("Passw0rd");
        sut.setData({valid: true});
        await sut.vm.$nextTick();

        sut.find(byDT("submit-btn")).trigger("click");

        expect(sessionStore.actions.register).toBeCalledWith(expect.anything(), new SessionDTO("email@email.com", "Passw0rd"));
    })
})