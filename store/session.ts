import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import Constants from "~/src/core/Constants";
import { lazyInject } from "~/src/core/Container";
import { SYMBOLS } from "~/src/core/SYMBOLS";
import IUserRepository from "../src/repositories/types/IUserRepository";
import SessionDTO from "../src/models/types/SessionDTO";

@Module({
    name: 'session',
    namespaced: true,
    stateFactory: true,
})
export default class SessionStore extends VuexModule {

    @lazyInject(SYMBOLS.UserRepository) repository!: IUserRepository

    private token: string | null | undefined;

    get isLogged(): boolean {
        return !!this.token;
    }

    @Mutation
    setToken(token: string | null) {
        this.token = token;
    }

    @Action({ rawError: true })
    async register(dto: SessionDTO) {
        await this.repository.register(dto.email, dto.password);
    }
}