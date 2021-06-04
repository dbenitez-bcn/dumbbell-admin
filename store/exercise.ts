import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { lazyInject } from "~/src/core/Container";
import { SYMBOLS } from "~/src/core/SYMBOLS";
import Exercise from "~/src/models/domain/Exercise";
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

    @Action({ rawError: true })
    async fetchExercises() {
        this.setExercises(await this.repository.getAll());
    }

    @Action({ rawError: true })
    async delete(id: number) {
        await this.repository.delete(id);
    }

    get exercises(): ExerciseVM[] {
        return this.list.map(exercise => exercise.toVM());
    }
}