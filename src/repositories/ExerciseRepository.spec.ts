import { NuxtAxiosInstance } from "@nuxtjs/axios";
import Exercise from "../models/domain/Exercise";
import ExerciseRepository from "./ExerciseRepository";

describe("Exercise repository", () => {
    const axios = {
        $get: jest.fn(),
        $delete: jest.fn()
    }
    const sut = new ExerciseRepository(axios as unknown as NuxtAxiosInstance);

    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })

    it("Should return all exercises", async () => {
        const expected = [new Exercise(1, "first", "exercise", 7), new Exercise(2, "second", "exercise", 4)];
        axios.$get.mockResolvedValue([{
            name: "first",
            description: "exercise",
            difficulty: 7,
            id: 1
        }, {
            name: "second",
            description: "exercise",
            difficulty: 4,
            id: 2
        }])

        const got = await sut.getAll();

        expect(got).toStrictEqual(expected);
        expect(axios.$get).toBeCalledWith("/exercise")
    })

    it("Should delete an exercise", async () => {
        await sut.delete(1);

        expect(axios.$delete).toBeCalledWith("/exercise/1");
    })
})