import Exercise from "~/domain/models/Exercise";
import ExercisesPageDTO from "~/domain/types/ExercisesPageDTO";

export default interface IExerciseRepository {
    getAll(page: number): Promise<ExercisesPageDTO>;
    getById(id: number): Promise<Exercise>;
    create(name: string, description: string, difficulty: number): Promise<Exercise>;
    update(id: number, name: string, description: string, difficulty: number): Promise<void>;
    delete(id: number): Promise<void>;
}