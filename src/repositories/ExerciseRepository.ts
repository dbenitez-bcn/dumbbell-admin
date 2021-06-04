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
        return await this.axios.$get("/exercise").then(response => response.map(this.toExercise));
    }

    async getById(id: number): Promise<Exercise> {
        return await this.axios.$get(`/exercise/${id}`).then(this.toExercise);
    }

    async create(name: string, description: string, difficulty: number): Promise<Exercise> {
        return await this.axios
            .$post("/exercise", { name, description, difficulty })
            .then(this.toExercise);
    }

    async update(id: number, name: string, description: string, difficulty: number) {
        this.axios.$put(`/exercise/${id}`, { name, description, difficulty });
    }

    async delete(id: number) {
        await this.axios.$delete(`/exercise/${id}`);
    }

    private toExercise(exercise: any): Exercise {
        return new Exercise(exercise.id, exercise.name, exercise.description, exercise.difficulty);
    }
}