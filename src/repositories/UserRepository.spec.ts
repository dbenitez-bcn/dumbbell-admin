import { NuxtAxiosInstance } from "@nuxtjs/axios";
import UserRepository from "./UserRepository"

describe("UserRepository", () => {
    const axios = {
        $post: jest.fn()
    };
    const sut = new UserRepository(axios as unknown as NuxtAxiosInstance);
    it("should call api", async () => {
        axios.$post.mockResolvedValue({
            data: {
                token: "token"
            }
        })
        const got = await sut.login("email", "password");

        expect(got).toBe("token");
        expect(axios.$post).toHaveBeenCalledWith("http://localhost:8080/login", {email: "email", password: "password"});
    })
})