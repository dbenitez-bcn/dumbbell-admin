import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { axios } from "~~/test/TestUtils";
import UserRepository from "./UserRepository"

describe("UserRepository", () => {
    const sut = new UserRepository(axios as unknown as NuxtAxiosInstance);
    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })

    describe("register", () => {
        it("should call api", async () => {
            await sut.register("email", "password");

            expect(axios.$post).toHaveBeenCalledWith("/register", { email: "email", password: "password" });
        })
    })
})