import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { inject, injectable } from "inversify";
import { SYMBOLS } from "../core/SYMBOLS";
import { IUserRepository } from "./types/IUserRepository";

@injectable()
export default class UserRepository implements IUserRepository {
    constructor(
        @inject(SYMBOLS.UserRepository) private axios: NuxtAxiosInstance
    ) { }

    async login(email: string, password: string): Promise<string>{
        const response = await this.axios.$post("http://localhost:8080/login", {email, password});
        return response.data.token;
    }

    async register(email: string, password: string): Promise<void>{
        await this.axios.$post("http://localhost:8080/register", {email, password});
    }

}