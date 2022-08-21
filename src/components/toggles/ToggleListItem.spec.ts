import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import ToggleListItem from "./ToggleListItem.vue";
import { byDT, localVue } from "~~/test/TestUtils";
import ToggleVM from "~/domain/viewModels/ToggleVM";
import ToggleUpdateDTO from "~/domain/types/ToggleUpdateDTO";
describe("Toggle List Item", () => {
    const confirmSpy = jest.spyOn(window, 'confirm');
    const $router = {
        push: jest.fn()
    };
    const toggleStore = {
        namespaced: true,
        actions: {
            delete: jest.fn(),
            update: jest.fn()
        }
    };
    const store = new Vuex.Store({
        modules: {
            toggles: toggleStore
        }
    });
    const sut = mount(ToggleListItem, {
        propsData: {
            toggle: new ToggleVM("TEST_TOGGLE", false)
        },
        data() {
            return {
                isTesterinoEnabled: true
            }
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

    it("should delete the toggle when user acepts ", async () => {
        confirmSpy.mockImplementation(jest.fn(() => true));

        await sut.findAll(".v-btn").trigger("click");

        expect(toggleStore.actions.delete).toBeCalledWith(expect.anything(), "TEST_TOGGLE");
        expect(confirmSpy).toBeCalledWith("Do you want to delete toggle?");
    })

    it("should not delete the toggle when user cancel", async () => {
        confirmSpy.mockImplementation(jest.fn(() => false));

        await sut.findAll(".v-btn").trigger("click");

        expect(toggleStore.actions.delete).not.toBeCalled();
    })

    it("should update the toggle when switch triggered", async () => {
        await sut.find(byDT("toggle-switch")).trigger("click");

        expect(toggleStore.actions.update).toBeCalledWith(expect.anything(), new ToggleUpdateDTO("TEST_TOGGLE", true));
    })


})