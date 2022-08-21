import { NuxtAxiosInstance } from "@nuxtjs/axios";

export class TogglesService {
    constructor(
        private axios: NuxtAxiosInstance
    ) {}

    async isTesterinoEnabled(): Promise<boolean> {
        return await this.axios.$get<boolean>("/toggle/TESTERINO");
    }
}