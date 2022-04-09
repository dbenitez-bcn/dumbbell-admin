import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

function byDT(tag: string): string {
    return `[data-dt="${tag}"]`;
}

const localVue = createLocalVue();
localVue.use(Vuex);

const axios = {
    $get: jest.fn(),
    $delete: jest.fn(),
    $post: jest.fn(),
    $put: jest.fn()
}

export { byDT, localVue, axios };