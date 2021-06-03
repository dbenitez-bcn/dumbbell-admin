import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ExercisesList from "./ExercisesList.vue";

describe("Exercises list", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const exerciseStore = {
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