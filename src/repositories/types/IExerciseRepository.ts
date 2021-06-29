import Exercise from "~/models/domain/Exercise";

export default interface IExerciseRepository {
    getAll(): Promise<Exercise[]>;
    getById(id: number): Promise<Exercise>;
    create(name: string, description: string, difficulty: number): Promise<Exercise>;
    update(id: number, name: string, description: string, difficulty: number): Promise<void>;
    delete(id: number): Promise<void>;
}