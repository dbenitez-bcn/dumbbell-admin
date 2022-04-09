import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { inject, injectable } from "inversify";
import { SYMBOLS } from "~/core/SYMBOLS";
import Toggle from "~/domain/models/Toggle";
import IToggleRepository from "./types/IToggleRepository";

@injectable()
export default class ToggleRepository implements IToggleRepository {
    constructor(
        @inject(SYMBOLS.NuxtAxiosInstance) private axios: NuxtAxiosInstance
    ) {}

    async create(name: string, value: boolean): Promise<Toggle> {
        return await this.axios.$post("/toggle", {
            name,
            value
        }).then(this.toToggle)
    }

    private toToggle(exercise: any): Toggle {
        return new Toggle(exercise.name, exercise.value);
    }
}