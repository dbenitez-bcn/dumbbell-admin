import { Context } from "@nuxt/types";
import toggles from "./togglesSetup"

describe("togglesSetup", () => {
    it("Should inject the service", () => {
        const context = {
            $axios: jest.fn()
        } as unknown as Context;
        const inject =  jest.fn();

        toggles(context, inject)

        expect(inject).toBeCalledWith("toggles", expect.anything())
    })
})