import Exercise from "~/src/models/domain/Exercise";

export default interface IExerciseRepository {
    getAll(): Promise<Exercise[]>;
    getById(id: number): Promise<Exercise>;
    create(name: string, description: string, difficulty: number): Promise<Exercise>;
    delete(id: number): Promise<void>;
}