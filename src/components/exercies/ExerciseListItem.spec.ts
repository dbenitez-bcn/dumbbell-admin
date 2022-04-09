import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import ExerciseListItem from "./ExerciseListItem.vue";
import { byDT, localVue } from "~~/test/TestUtils";
import ExerciseVM from "~/domain/viewModels/ExerciseVM";
describe("Exercise List Item", () => {
    const confirmSpy = jest.spyOn(window, 'confirm');
    const $router = {
        push: jest.fn()
    };
    const exerciseStore = {
        namespaced: true,
        actions: {
            delete: jest.fn()
        }
    };
    const store = new Vuex.Store({
        modules: {
            exercise: exerciseStore
        }
    });
    const sut = mount(ExerciseListItem, {
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
    })

    it("should navigate to details", () => {
        sut.find(byDT("exercise-title")).trigger("click");

        expect($router.push).toBeCalledWith("/exercises/1");
    })
    
    it("should navigate to edit page", async () => {
        await sut.find(".v-btn").trigger("click");

        expect($router.push).toBeCalledWith("/exercises/1/edit");
    })

    it("should delete the exercise when user acepts ", async () => {
        confirmSpy.mockImplementation(jest.fn(() => true));

        await sut.findAll(".v-btn").at(1).trigger("click");

        expect(exerciseStore.actions.delete).toBeCalledWith(expect.anything(), 1);
        expect(confirmSpy).toBeCalledWith("Do you want to delete exercise?");
    })

    it("should not delete the exercise when user cancel", async () => {
        confirmSpy.mockImplementation(jest.fn(() => false));

        await sut.findAll(".v-btn").at(1).trigger("click");

        expect(exerciseStore.actions.delete).not.toBeCalled();
    })

    
})