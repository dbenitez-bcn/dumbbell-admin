import { injectable } from "inversify";
import IExerciseRepository from "~/repositories/types/IExerciseRepository";

@injectable()
export class FakeExerciseRepository implements IExerciseRepository {
    getAll = jest.fn();
    getById = jest.fn();
    create = jest.fn();
    update = jest.fn();
    delete = jest.fn();
}