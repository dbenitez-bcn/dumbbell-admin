import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { inject, injectable } from "inversify";
import { SYMBOLS } from "../core/SYMBOLS";
import Exercise from "../models/domain/Exercise";
import IExerciseRepository from "./types/IExerciseRepository";

@injectable()
export default class ExerciseRepository implements IExerciseRepository {
    constructor(
        @inject(SYMBOLS.NuxtAxiosInstance) private axios: NuxtAxiosInstance
    ) { }

    async getAll(): Promise<Exercise[]> {
        const response = await this.axios.$get("/exercise");
        return response.map((exercise: any) => new Exercise(exercise.id, exercise.name, exercise.description, exercise.difficulty));
    }
}