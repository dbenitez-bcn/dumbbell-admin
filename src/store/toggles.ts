import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { lazyInject } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import Toggle from "~/domain/models/Toggle";
import ToggleVM from "~/domain/viewModels/ToggleVM";
import ToggleDTO from "~/domain/types/ToggleDTO";
import IToggleRepository from "~/repositories/types/IToggleRepository";

@Module({
    name: 'toggles',
    namespaced: true,
    stateFactory: true
})
export default class TogglesStore extends VuexModule { 
    @lazyInject(SYMBOLS.ToggleRepository) repository!: IToggleRepository;
    private list: Toggle[] = [];

    @Mutation
    private add(toggle: Toggle) {
        this.list.push(toggle);
    }

    @Action({rawError: true})
    async create(dto: ToggleDTO) {
        this.add(await this.repository.create(dto.name.toUpperCase().replace(" ", "_"), false));
    }

    get toggles(): ToggleVM[] {
        return this.list.map(toggle => toggle.toVM());
    }
}