import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils";
import { container } from "~/core/Container";
import { SYMBOLS } from "~/core/SYMBOLS";
import IExerciseRepository from "~/repositories/types/IExerciseRepository";
import { getModule } from 'vuex-module-decorators';
import ExerciseStore from './exercise';
import { FakeExerciseRepository } from '~/repositories/__mocks__/FakeExerciseRepository';
import Exercise from '~/models/domain/Exercise';
import ExerciseVM from '~/models/viewModels/ExerciseVM';
import ExerciseDTO from '~/models/types/ExerciseDTO';

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

    describe("get one by id", () => {
        it("Should fetch an exercise", async () => {
            repository.getById.mockResolvedValue(AN_EXERCISE);

            const got = await sut.getById(1);

            expect(got).toStrictEqual(AN_EXERCISE_VM);
        })

        it("Should all repository", async () => {
            repository.getById.mockResolvedValue(AN_EXERCISE);

            await sut.getById(1);

            expect(repository.getById).toBeCalledWith(1);
        })
    })

    describe("create", () => {
        it("Should call repository", async () => {
            repository.create.mockResolvedValue(AN_EXERCISE);

            await sut.create(new ExerciseDTO("name", "description", 7));

            expect(repository.create).toBeCalledWith("name", "description", 7);
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

    it("Should update an exercise", async () => {
        await sut.update(new ExerciseDTO("name", "description", 4, 1));

        expect(repository.update).toBeCalledWith(1, "name", "description", 4);
    })
})