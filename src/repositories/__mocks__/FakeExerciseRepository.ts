import { injectable } from "inversify";
import IExerciseRepository from "../types/IExerciseRepository";

@injectable()
export class FakeExerciseRepository implements IExerciseRepository {
    getAll = jest.fn();
    getById = jest.fn();
    create = jest.fn();
    delete = jest.fn();
}