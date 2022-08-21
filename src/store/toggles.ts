import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { lazyInject } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import Toggle from "~/domain/models/Toggle";
import ToggleVM from "~/domain/viewModels/ToggleVM";
import ToggleDTO from "~/domain/types/ToggleDTO";
import IToggleRepository from "~/repositories/types/IToggleRepository";
import ToggleUpdateDTO from "~/domain/types/ToggleUpdateDTO";

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

    @Mutation
    private popById(name: string) {
        this.list = this.list.filter(toggle => toggle.name != name);
    }

    @Action({rawError: true})
    async create(dto: ToggleDTO) {
        this.add(await this.repository.create(dto.name.toUpperCase().replace(" ", "_"), false));
    }

    @Action({rawError: true})
    async delete(name: string) {
        await this.repository.delete(name);
        this.popById(name);
    }

    @Action({rawError: true})
    async update(dto: ToggleUpdateDTO) {
        await this.repository.update(dto.name, dto.value);
    }

    @Action({rawError: true})
    async fetchToggles() {
        await this.repository
        .getAll()
        .then(list => list.map(this.add));
    }

    get toggles(): ToggleVM[] {
        return this.list.map(toggle => toggle.toVM());
    }
}