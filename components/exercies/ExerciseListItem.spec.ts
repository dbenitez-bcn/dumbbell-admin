import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import ExerciseListItem from "./ExerciseListItem.vue";
import { byDT, localVue } from "~/test/TestUtils";
import ExerciseVM from "~/src/models/viewModels/ExerciseVM";
describe("Exercise List Item", () => {
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
        sut.find(".v-sheet").trigger("click");

        expect($router.push).toBeCalledWith("/exercises/1");
    })
})