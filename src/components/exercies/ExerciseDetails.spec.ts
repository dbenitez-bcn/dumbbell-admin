import { mount } from '@vue/test-utils';import Vuex from "vuex";
import Vuetify from "vuetify";
import { byDT, localVue } from "~~/test/TestUtils";
import ExerciseVM from '~/domain/viewModels/ExerciseVM';
import ExerciseDetails from "./ExerciseDetails.vue";

describe('Exercise details', () => {
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
    const sut = mount(ExerciseDetails, {
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
    
    it("should navigate to edit page", async () => {
        await sut.find(".v-btn").trigger("click");

        expect($router.push).toBeCalledWith("/exercises/1/edit");
    })
    it("should delete the exercise when user acepts ", async () => {
        confirmSpy.mockImplementation(jest.fn(() => true));

        await sut.find(byDT("delete-btn")).trigger("click");

        expect(exerciseStore.actions.delete).toBeCalledWith(expect.anything(), 1);
        expect(confirmSpy).toBeCalledWith("Do you want to delete exercise?");
    })

    it("should not delete the exercise when user cancel", async () => {
        confirmSpy.mockImplementation(jest.fn(() => false));

        await sut.find(byDT("delete-btn")).trigger("click");

        expect(exerciseStore.actions.delete).not.toBeCalled();
    })
})
