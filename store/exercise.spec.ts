import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils";
import { container } from "~/src/core/Container";
import { SYMBOLS } from "~/src/core/SYMBOLS";
import IExerciseRepository from "~/src/repositories/types/IExerciseRepository";
import { getModule } from 'vuex-module-decorators';
import ExerciseStore from './exercise';
import { FakeExerciseRepository } from '~/src/repositories/__mocks__/FakeExerciseRepository';
import Exercise from '~/src/models/domain/Exercise';
import ExerciseVM from '~/src/models/viewModels/ExerciseVM';
import ExerciseDTO from '~/src/models/types/ExerciseDTO';

describe("Exercise store", () => {
    const AN_EXERCISE = new Exercise(1, "name", "description", 7);
    const AN_EXERCISE_VM = new ExerciseVM(1, "name", "description", 7);

    let sut: ExerciseStore;
    let repository: FakeExerciseRepository;

    beforeAll(() => {
        container
            .bind<IExerciseRepository>(SYMBOLS.ExerciseRepository)
            .to(FakeExerciseRepository)
            .inSingletonScope();
        repository = container
            .get<IExerciseRepository>(SYMBOLS.ExerciseRepository) as FakeExerciseRepository;
        const Vue = createLocalVue();
        Vue.use(Vuex)
    })

    beforeEach(() => {
        const store = new Vuex.Store({
            modules: {
                exercise: ExerciseStore
            }
        })
        sut = getModule(ExerciseStore, store);
    })

    it("Should fetch all exercises", async () => {
        repository.getAll.mockResolvedValue([new Exercise(1, "name", "description", 8)]);
        await sut.fetchExercises();

        const got = sut.exercises;

        expect(got).toStrictEqual([new ExerciseVM(1, "name", "description", 8)]);
        expect(repository.getAll).toBeCalled();
    })

    describe("create", () => {
        it("Should call repository", async () => {
            repository.create.mockResolvedValue(AN_EXERCISE);

            await sut.create(new ExerciseDTO("name", "description", 7));

            expect(repository.create).toBeCalledWith("name", "description", 7);
            expect(sut.exercises).toContainEqual(AN_EXERCISE_VM);
        })

        it("Should add the exercise", async () => {
            repository.create.mockResolvedValue(AN_EXERCISE);

            await sut.create(new ExerciseDTO("name", "description", 7));

            expect(sut.exercises).toContainEqual(AN_EXERCISE_VM);
        })
    })

    describe("delete", () => {
        beforeEach(async () => {
            repository.getAll.mockResolvedValue([AN_EXERCISE]);
            await sut.fetchExercises();
        })

        it("should delete an exercise", async () => {
            await sut.delete(1);

            expect(sut.exercises).not.toContainEqual(AN_EXERCISE_VM);
        })

        it("should call repository", async () => {
            await sut.delete(1);

            expect(repository.delete).toBeCalledWith(1);
        })
    })
})