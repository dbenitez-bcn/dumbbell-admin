import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ExercisesList from "./ExercisesList.vue";
import { localVue } from "~~/test/TestUtils";

describe("Exercises list", () => {
    const exerciseStore = {
        namespaced: true,
        getters: {
            exercises: jest.fn()
        },
        actions: {
            fetchExercises: jest.fn()
        }
    }
    const store = new Vuex.Store({
        modules: {
            exercise: exerciseStore
        }
    })

    it("should display a list of exercies", async () => {
        exerciseStore.getters.exercises.mockReturnValue([]);
        const sut = shallowMount(ExercisesList, {
            store, localVue, mocks: {
                $fetchState: {
                    pending: false,
                    error: false
                }
            }
        });

        expect(sut.vm).toBeTruthy()
    })
})