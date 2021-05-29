import { NuxtAxiosInstance } from "@nuxtjs/axios";
import Exercise from "../models/domain/Exercise";
import IExerciseRepository from "./types/IExerciseRepository";

export default class ExerciseRepository implements IExerciseRepository {
    constructor(
        private axios: NuxtAxiosInstance
    ) { }

    async getAll(): Promise<Exercise[]> {
        const response = await this.axios.$get("/exercises");
        return response.data.map((exercise: any) => new Exercise(exercise.id, exercise.name, exercise.description, exercise.difficulty));
    }
}