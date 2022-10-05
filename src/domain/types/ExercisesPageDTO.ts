import Exercise from "../models/Exercise";

export default interface ExercisesPageDTO {
    exercises: Exercise[],
    pagesCount: number
}