import { NuxtAxiosInstance } from "@nuxtjs/axios";
import Exercise from "~/domain/models/Exercise";
import { axios } from "~~/test/TestUtils";
import ExerciseRepository from "./ExerciseRepository";

describe("Exercise repository", () => {
    const FIRST_EXERCISE = new Exercise(1, "first", "exercise", 7);
    const FIRST_EXERCISE_DATA = {
        name: "first",
        description: "exercise",
        difficulty: 7,
        id: 1
    };
    
    const sut = new ExerciseRepository(axios as unknown as NuxtAxiosInstance);

    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })

    it("Should return all exercises", async () => {
        const expected = [FIRST_EXERCISE, new Exercise(2, "second", "exercise", 4)];
        axios.$get.mockResolvedValue({
            exercises: [
                FIRST_EXERCISE_DATA, {
                    name: "second",
                    description: "exercise",
                    difficulty: 4,
                    id: 2
                }],
            pagesCount: 1
        })

        const got = await sut.getAll(1);

        expect(got.exercises).toStrictEqual(expected);
        expect(got.pagesCount).toStrictEqual(1);
        expect(axios.$get).toBeCalledWith("/exercise?page=1")
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

        expect(axios.$post).toBeCalledWith("/exercise", { name: "name", description: "description", difficulty: 5 });
        expect(got).toStrictEqual(FIRST_EXERCISE);
    })

    it("should update an exercise", async () => {
        await sut.update(1, "name", "description", 5);

        expect(axios.$put).toBeCalledWith("/exercise/1", { name: "name", description: "description", difficulty: 5 });
    })

    it("Should delete an exercise", async () => {
        await sut.delete(1);

        expect(axios.$delete).toBeCalledWith("/exercise/1");
    })
})