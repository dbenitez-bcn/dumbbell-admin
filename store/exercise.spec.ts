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

describe("Exercise store", () => {
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

    it("should delete an exercise", async () => {
        await sut.delete(1);

        expect(repository.delete).toBeCalledWith(1);
    })
})