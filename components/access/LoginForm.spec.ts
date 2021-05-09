import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";

describe("Login form", () => {
    it("should login the user with the given inputs", async () => {
        const wrapper = shallowMount(LoginForm);

        expect(wrapper.vm).toBeTruthy();
    })
})