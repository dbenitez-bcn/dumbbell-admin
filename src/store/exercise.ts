import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { lazyInject } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import Exercise from "~/domain/models/Exercise";
import ExerciseDTO from "~/domain/types/ExerciseDTO";
import ExerciseVM from "~/domain/viewModels/ExerciseVM";
import IExerciseRepository from "~/repositories/types/IExerciseRepository";

@Module({
    name: 'exercise',
    namespaced: true,
    stateFactory: true
})
export default class ExerciseStore extends VuexModule {

    @lazyInject(SYMBOLS.ExerciseRepository) repository!: IExerciseRepository

    private list: Exercise[] = [];
    private pagesCount: number = 1;

    @Mutation
    private setExercises(exercises: Exercise[]) {
        this.list = exercises;
    }

    @Mutation
    private setPagesCount(pagesCount: number) {
        this.pagesCount = pagesCount;
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
    async fetchExercises(page: number) {
        const exercisePage = await this.repository.getAll(page);
        this.setExercises(exercisePage.exercises);
        this.setPagesCount(exercisePage.pagesCount);
    }

    @Action({ rawError: true })
    async delete(id: number) {
        await this.repository.delete(id);
        this.popById(id);
    }

    @Action({ rawError: true })
    async create(dto: ExerciseDTO) {
        this.add(await this.repository.create(dto.name, dto.description, dto.difficulty));
    }

    @Action({ rawError: true })
    async update(dto: ExerciseDTO) {
        await this.repository.update(dto.id, dto.name, dto.description, dto.difficulty);
    }

    @Action({ rawError: true })
    async getById(id: number) {
        return await this.repository.getById(id).then(exercise => exercise.toVM());
    }

    get exercises(): ExerciseVM[] {
        return this.list.map(exercise => exercise.toVM());
    }

    get pages(): number {
        return this.pagesCount;
    }
}