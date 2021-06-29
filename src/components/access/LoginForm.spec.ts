import { mount } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";
import Vuetify from "vuetify";
import { byDT } from "~~/test/TestUtils";

describe("Login form", () => {
    const $auth = {
        loginWith: jest.fn()
    }
    const sut = mount(LoginForm, {
      mocks: {
        $auth
      },
      vuetify: new Vuetify()
    })
    it("should login the user with the given inputs", async () => {
        sut.find(byDT("email-input")).setValue("email@email.com");
        sut.find(byDT("password-input")).setValue("Passw0rd");
        sut.setData({valid: true});
        await sut.vm.$nextTick();

        sut.find(byDT("submit-btn")).trigger("click");

        expect($auth.loginWith).toBeCalledWith("local", {
            data: {
                email: "email@email.com",
                password: "Passw0rd"
            }
        })
    })
})