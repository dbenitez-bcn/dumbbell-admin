import { NuxtAxiosInstance } from "@nuxtjs/axios";
import Exercise from "../models/domain/Exercise";
import ExerciseRepository from "./ExerciseRepository";

describe("Exercise repository", () => {
    const axios = {
        $get: jest.fn()
    }
    const sut = new ExerciseRepository(axios as unknown as NuxtAxiosInstance);

    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })

    it("Should return all exercises", async () => {
        const expected = [new Exercise(1, "first", "exercise", 7), new Exercise(2, "second", "exercise", 4)];
        axios.$get.mockResolvedValue({
            data: [{
                name: "first",
                description: "exercise",
                difficulty: 7,
                id: 1
            }, {
                name: "second",
                description: "exercise",
                difficulty: 4,
                id: 2
            }]
        })

        const got = await sut.getAll();

        expect(got).toStrictEqual(expected);
        expect(axios.$get).toBeCalledWith("/exercises")
    })
})