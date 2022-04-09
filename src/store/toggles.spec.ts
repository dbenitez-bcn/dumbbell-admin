import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils";
import { getModule } from 'vuex-module-decorators';
import { container } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import FakeToggleRepository from "~/repositories/__mocks__/FakeToggleRepository";
import TogglesStore from "./toggles";
import IToggleRepository from '~/repositories/types/IToggleRepository';
import ToggleDTO from '~/domain/types/ToggleDTO';
import Toggle from '~/domain/models/Toggle';
import ToggleVM from '~/domain/viewModels/ToggleVM';

describe("Toggles store", () => {
    const A_TOGGLE = new Toggle("TEST_TOGGLE", false);
    let sut: TogglesStore;
    let repository: FakeToggleRepository;

    beforeAll(() => {
        container
            .bind<IToggleRepository>(SYMBOLS.ToggleRepository)
            .to(FakeToggleRepository)
            .inSingletonScope();
        repository = container
            .get<IToggleRepository>(SYMBOLS.ToggleRepository) as FakeToggleRepository;
        const Vue = createLocalVue();
        Vue.use(Vuex);
        const store = new Vuex.Store({
            modules: {
                toggles: TogglesStore
            }
        })
        sut = getModule(TogglesStore, store);
    })

    describe("when a toggle is created", () => {
        beforeAll(async () => {
            repository.create.mockResolvedValue(A_TOGGLE);
            await sut.create(new ToggleDTO("test toggle"))
        })

        it("should format toggle name", () => {
            expect(repository.create).toBeCalledWith("TEST_TOGGLE", expect.anything());
        })

        it("should create the toggle off", () => {
            expect(repository.create).toBeCalledWith(expect.anything(), false);
        })

        it("Should add toggle in the list", () => {
            expect(sut.toggles).toContainEqual(new ToggleVM("TEST_TOGGLE", false));
        })
    })
})