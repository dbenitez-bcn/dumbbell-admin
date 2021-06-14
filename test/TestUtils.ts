import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

function byDT(tag: string): string {
    return `[data-dt="${tag}"]`;
}

const localVue = createLocalVue();
localVue.use(Vuex);

export { byDT, localVue };