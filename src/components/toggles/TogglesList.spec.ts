import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import TogglesList from "./TogglesList.vue";
import { localVue } from "~~/test/TestUtils";

describe("Toggles list", () => {
    const toggleStore = {
        namespaced: true,
        getters: {
            toggles: jest.fn()
        },
        actions: {
            fetchToggles: jest.fn()
        }
    }
    const store = new Vuex.Store({
        modules: {
            toggles: toggleStore
        }
    })

    it("should display a list of exercies", async () => {
        toggleStore.getters.toggles.mockReturnValue([]);
        const sut = shallowMount(TogglesList, {
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