import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
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

    @Action({ rawError: true })
    async register(dto: SessionDTO) {
        await this.repository.register(dto.email, dto.password);
    }
}