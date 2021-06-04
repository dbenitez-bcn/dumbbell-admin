import { NuxtAxiosInstance } from "@nuxtjs/axios";
import Exercise from "../models/domain/Exercise";
import ExerciseRepository from "./ExerciseRepository";

describe("Exercise repository", () => {
    const FIRST_EXERCISE = new Exercise(1, "first", "exercise", 7);
    const FIRST_EXERCISE_DATA = {
        name: "first",
        description: "exercise",
        difficulty: 7,
        id: 1
    };
    const axios = {
        $get: jest.fn(),
        $delete: jest.fn(),
        $post: jest.fn()
    }
    const sut = new ExerciseRepository(axios as unknown as NuxtAxiosInstance);

    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })

    it("Should return all exercises", async () => {
        const expected = [FIRST_EXERCISE, new Exercise(2, "second", "exercise", 4)];
        axios.$get.mockResolvedValue([
            FIRST_EXERCISE_DATA, {
                name: "second",
                description: "exercise",
                difficulty: 4,
                id: 2
            }])

        const got = await sut.getAll();

        expect(got).toStrictEqual(expected);
        expect(axios.$get).toBeCalledWith("/exercise")
    })

    it("Should return an exercise", async () => {
        axios.$get.mockResolvedValue(FIRST_EXERCISE_DATA);

        const got = await sut.getById(1);

        expect(axios.$get).toBeCalledWith("/exercise/1");
        expect(got).toStrictEqual(FIRST_EXERCISE)
    })

    it("Should create an exercise", async () => {
        axios.$post.mockResolvedValue(FIRST_EXERCISE_DATA);

        const got = await sut.create("name", "description", 5);

        expect(axios.$post).toBeCalledWith("/exercise", {name: "name", description: "description", difficulty: 5});
        expect(got).toStrictEqual(FIRST_EXERCISE);
    })

    it("Should delete an exercise", async () => {
        await sut.delete(1);

        expect(axios.$delete).toBeCalledWith("/exercise/1");
    })
})