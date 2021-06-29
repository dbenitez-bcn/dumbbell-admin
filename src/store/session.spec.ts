import Vuex from 'vuex';
import { getModule } from 'nuxt-property-decorator';
import { createLocalVue } from "@vue/test-utils";
import { container } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import IUserRepository from "~/repositories/types/IUserRepository";
import { FakeUserRepository } from "~/repositories/__mocks__/UserRepository";
import SessionStore from './session';
import SessionDTO from '~/domain/types/SessionDTO';

describe("Session store", () => {
    let sut: SessionStore;
    let repository: IUserRepository;

    beforeAll(() => {
        container
            .bind<IUserRepository>(SYMBOLS.UserRepository)
            .to(FakeUserRepository)
            .inSingletonScope();
        repository = container
            .get<IUserRepository>(SYMBOLS.UserRepository)
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