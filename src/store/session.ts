import { Module, VuexModule, Action } from "vuex-module-decorators";
import { lazyInject } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import IUserRepository from "~/repositories/types/IUserRepository";
import SessionDTO from "~/models/types/SessionDTO";

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