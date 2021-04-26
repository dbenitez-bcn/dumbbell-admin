import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { IUserRepository } from "./types/IUserRepository";

export default class UserRepository implements IUserRepository {
    constructor(
        private axios: NuxtAxiosInstance
    ) { }

    async login(email: string, password: string): Promise<string>{
        const response = await this.axios.$post("http://localhost:8080/login", {email, password});
        return response.data.token;
    }

    async register(email: string, password: string): Promise<void>{
        await this.axios.$post("http://localhost:8080/register", {email, password});
    }

}