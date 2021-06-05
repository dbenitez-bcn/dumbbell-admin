import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { lazyInject } from "~/src/core/Container";
import { SYMBOLS } from "~/src/core/SYMBOLS";
import Exercise from "~/src/models/domain/Exercise";
import ExerciseDTO from "~/src/models/types/ExerciseDTO";
import ExerciseVM from "~/src/models/viewModels/ExerciseVM";
import IExerciseRepository from "~/src/repositories/types/IExerciseRepository";

@Module({
    name: 'exercise',
    namespaced: true,
    stateFactory: true
})
export default class ExerciseStore extends VuexModule {

    @lazyInject(SYMBOLS.ExerciseRepository) repository!: IExerciseRepository

    private list: Exercise[] = [];

    @Mutation
    private setExercises(exercises: Exercise[]) {
        this.list = exercises;
    }

    @Mutation
    private popById(id: number) {
        this.list = this.list.filter(exercise => exercise.id != id);
    }

    @Mutation
    private add(exercise: Exercise) {
        this.list.push(exercise);
    }

    @Action({ rawError: true })
    async fetchExercises() {
        this.setExercises(await this.repository.getAll());
    }

    @Action({ rawError: true })
    async delete(id: number) {
        await this.repository.delete(id);
        this.popById(id)
    }

    @Action({ rawError: true })
    async create(exerciseDTO: ExerciseDTO) {
        this.add(await this.repository.create(exerciseDTO.name, exerciseDTO.description, exerciseDTO.difficulty));
    }

    get exercises(): ExerciseVM[] {
        return this.list.map(exercise => exercise.toVM());
    }
}