import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";
import ToggleDTO from "~/domain/types/ToggleDTO";
import { byDT, localVue } from "~~/test/TestUtils";
import ToggleCreationForm from "./ToggleCreationForm.vue";

describe("Toggle creation form", ()=> {
    const togglesStore = {
        namespaced: true,
        actions: {
            create: jest.fn()
        }
    }
    const store = new Vuex.Store({
        modules: {
            toggles: togglesStore
        }
    })
    const sut = mount(ToggleCreationForm, {
        store, localVue, vuetify: new Vuetify()
    });

    it("should create a toggle", async () => {
        sut.find(byDT("name-input")).setValue("toggle");
        sut.setData({isValid: true});
        await sut.vm.$nextTick();
        await sut.find(byDT("submit-btn")).trigger("click");

        expect(togglesStore.actions.create).toBeCalledWith(expect.anything(), new ToggleDTO("toggle"));
    })
})