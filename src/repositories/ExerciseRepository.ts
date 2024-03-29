import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { inject, injectable } from "inversify";
import { SYMBOLS } from "~/core/SYMBOLS";
import Exercise from "~/domain/models/Exercise";
import ExercisesPageDTO from "~/domain/types/ExercisesPageDTO";
import IExerciseRepository from "./types/IExerciseRepository";

@injectable()
export default class ExerciseRepository implements IExerciseRepository {
    constructor(
        @inject(SYMBOLS.NuxtAxiosInstance) private axios: NuxtAxiosInstance
    ) { }

    async getAll(page: number): Promise<ExercisesPageDTO> {
        const response = await this.axios.$get(`/exercises?page=${page}`);
        return {
            exercises: response.exercises.map(this.toExercise),
            pagesCount: response.pagesCount
        }
    }

    async getById(id: number): Promise<Exercise> {
        return await this.axios.$get(`/exercises/${id}`).then(this.toExercise);
    }

    async create(name: string, description: string, difficulty: number): Promise<Exercise> {
        return await this.axios
            .$post("/exercises", { name, description, difficulty })
            .then(this.toExercise);
    }

    async update(id: number, name: string, description: string, difficulty: number) {
        this.axios.$put(`/exercises/${id}`, { name, description, difficulty });
    }

    async delete(id: number) {
        await this.axios.$delete(`/exercises/${id}`);
    }

    private toExercise(exercise: any): Exercise {
        return new Exercise(exercise.id, exercise.name, exercise.description, exercise.difficulty);
    }
}