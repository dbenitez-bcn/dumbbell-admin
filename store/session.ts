import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import Constants from "~/src/core/Constants";
import { lazyInject } from "~/src/core/Container";
import { SYMBOLS } from "~/src/core/SYMBOLS";
import { IUserRepository } from "~/src/repositories/types/IUserRepository";
import SessionDTO from "../models/types/SessionDTO";

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

    @Action
    async login(dto: SessionDTO) {
        const token = await this.repository.login(dto.email, dto.password);
        this.setToken(token);
        localStorage.setItem(Constants.storage.TOKEN_KEY, token);
    }

    @Action({ rawError: true })
    async register(dto: SessionDTO) {
            await this.repository.register(dto.email, dto.password);
    }

    @Action
    async logout() {
        localStorage.removeItem(Constants.storage.TOKEN_KEY);
        this.setToken(null);
    }
}