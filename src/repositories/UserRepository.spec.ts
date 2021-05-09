import { NuxtAxiosInstance } from "@nuxtjs/axios";
import UserRepository from "./UserRepository"

describe("UserRepository", () => {
    const axios = {
        $post: jest.fn()
    };
    const sut = new UserRepository(axios as unknown as NuxtAxiosInstance);
    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })
    
    describe("login", () => {
        it("should call api", async () => {
            axios.$post.mockResolvedValue({
                    token: "token"
            })

            const got = await sut.login("email", "password");
    
            expect(got).toBe("token");
            expect(axios.$post).toHaveBeenCalledWith("/admin/login", {email: "email", password: "password"});
        })
    })

    describe("register", () => {
        it("should call api", async () => {
            await sut.register("email", "password");
    
            expect(axios.$post).toHaveBeenCalledWith("/register", {email: "email", password: "password"});
        })
    })
})