import { NuxtAxiosInstance } from "@nuxtjs/axios"
import Toggle from "~/domain/models/Toggle";
import { axios } from "~~/test/TestUtils"
import ToggleRepository from "./ToggleRepository"

describe("Toggle repository", () => {
    const sut = new ToggleRepository(axios as any as NuxtAxiosInstance);
    describe("create", () => {
        let got: Toggle;

        beforeAll(async () => {
            axios.$post.mockResolvedValue({
                "name": "TEST_TOGGLE",
                "value": false
            });

            got = await sut.create("TEST_TOGGLE", false);
        })

        it("Should call API", () => {
            expect(axios.$post).toBeCalledWith("/toggle", { name: "TEST_TOGGLE", value: false });
        })

        it("Should return the toggle", () => {
            expect(got).toStrictEqual(new Toggle("TEST_TOGGLE", false));
        })
    })
})