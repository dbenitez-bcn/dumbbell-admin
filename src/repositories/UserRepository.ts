import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { inject, injectable } from "inversify";
import { SYMBOLS } from "../core/SYMBOLS";
import IUserRepository from "./types/IUserRepository";

@injectable()
export default class UserRepository implements IUserRepository {
    constructor(
        @inject(SYMBOLS.NuxtAxiosInstance) private axios: NuxtAxiosInstance
    ) { }

    async register(email: string, password: string): Promise<void>{
        await this.axios.$post("/register", {email, password});
    }

}