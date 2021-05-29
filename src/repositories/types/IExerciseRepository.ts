import Exercise from "~/src/models/domain/Exercise";

export default interface IExerciseRepository {
    getAll(): Promise<Exercise[]>
}