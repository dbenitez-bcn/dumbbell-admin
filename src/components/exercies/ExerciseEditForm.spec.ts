
import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";
import ExerciseDTO from "~/domain/types/ExerciseDTO";
import ExerciseVM from "~/domain/viewModels/ExerciseVM";
import { byDT, localVue } from "~~/test/TestUtils";
import ExerciseEditForm from "./ExerciseEditForm.vue";
describe("Exercise creation form", () => {
    const $router = {
        back: jest.fn()
    };

    const exerciseStore = {
        namespaced: true,
        actions: {
            update: jest.fn()
        }
    }
    const store = new Vuex.Store({
        modules: {
            exercise: exerciseStore
        }
    })
    const sut = mount(ExerciseEditForm, {
        propsData: {
            exercise: new ExerciseVM(1, "name", "description", 6)
        },
        store,
        localVue,
        vuetify: new Vuetify(),
        mocks: {
            $router
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });

    it("Should create the exercise", async () => {
        sut.find(byDT("name-input")).setValue("new name");
        sut.find(byDT("description-input")).setValue("new description");
        sut.setData({ isValid: true });
        await sut.vm.$nextTick();

        await sut.find(byDT("submit-btn")).trigger("click");
        await sut.vm.$nextTick();

        expect(exerciseStore.actions.update).toBeCalledWith(expect.anything(), new ExerciseDTO("new name", "new description", 6, 1));
        expect($router.back).toHaveBeenCalled();
    })
});