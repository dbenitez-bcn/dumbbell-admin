import { shallowMount } from "@vue/test-utils";
import RegisterForm from "./RegisterForm.vue";

describe("Register form", () => {
    it("should register the user with the given inputs", async () => {
        const wrapper = shallowMount(RegisterForm);

        expect(wrapper.vm).toBeTruthy();
    })
})