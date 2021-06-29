
import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";
import ExerciseDTO from "../../models/types/ExerciseDTO";
import { byDT, localVue } from "~~/test/TestUtils";
import ExerciseCreationForm from "./ExerciseCreationForm.vue";
describe("Exercise creation form", () => {

    const exerciseStore = {
        namespaced: true,
        actions: {
            create: jest.fn()
        }
    }
    const store = new Vuex.Store({
        modules: {
            exercise: exerciseStore
        }
    })
    const sut = mount(ExerciseCreationForm, {
        store, localVue, vuetify: new Vuetify()
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });

    it("Should create the exercise", async () => {
        sut.find(byDT("name-input")).setValue("name");
        sut.find(byDT("description-input")).setValue("description");
        // sut.find(byDT("difficulty-input")).setValue(8);
        sut.setData({isValid: true});
        await sut.vm.$nextTick();

        await sut.find(byDT("submit-btn")).trigger("click");
        
        expect(exerciseStore.actions.create).toBeCalledWith(expect.anything(), new ExerciseDTO("name", "description", 5));
    })
});