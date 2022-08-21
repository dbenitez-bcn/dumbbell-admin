import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { axios } from "~~/test/TestUtils";
import { TogglesService } from "./TogglesService"

describe("ToggleService", () => {

    const sut = new TogglesService(axios as unknown as NuxtAxiosInstance);
    describe("isTesterinoEnabled", () => {
        it.each([true, false])("Should return the value", async (value: boolean) => {
            axios.$get.mockResolvedValue(value);
            
            const got = await sut.isTesterinoEnabled();

            expect(got).toBe(value);
        })
    })
})