import Vuex from 'vuex';
import { getModule } from 'nuxt-property-decorator';
import { createLocalVue } from "@vue/test-utils";
import { container } from "~/src/core/Container";
import { SYMBOLS } from "~/src/core/SYMBOLS";
import IUserRepository from "~/src/repositories/types/IUserRepository";
import { FakeUserRepository } from "~/src/repositories/__mocks__/UserRepository";
import SessionStore from './session';
import SessionDTO from '../src/models/types/SessionDTO';

describe("Session store", () => {
    let sut: SessionStore;
    let repository: FakeUserRepository;

    beforeAll(() => {
        container
            .bind<IUserRepository>(SYMBOLS.UserRepository)
            .to(FakeUserRepository)
            .inSingletonScope();
        repository = container
            .get<IUserRepository>(SYMBOLS.UserRepository) as FakeUserRepository;
        const Vue = createLocalVue();
        Vue.use(Vuex);
    })

    beforeEach(() => {
        const store = new Vuex.Store({
            modules: {
                session: SessionStore
            }
        })
        sut = getModule(SessionStore, store);
    })

    it("should call repository when register", async () => {
        const dto = new SessionDTO("email", "password");

        await sut.register(dto);

        expect(repository.register).toBeCalledWith("email", "password");
    })
})