import { Context } from '@nuxt/types';
import sut from "./axiosSetup";

describe("Axios setup", () => {
    it("Should bind axios onError", () => {
        const context = {
            $axios: {
                onError: jest.fn()
            }
        } as any as Context;
        
        sut(context);

        expect(context.$axios.onError).toHaveBeenCalled();
    })
})