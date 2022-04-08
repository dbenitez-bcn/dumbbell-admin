import { shallowMount } from '@vue/test-utils';
import DefaultLayout from "./default.vue";

describe('Default', () => {
    it('should be a vue instance', () => {
        const wrapper = shallowMount(DefaultLayout, {stubs: ["Nuxt"]});
        expect(wrapper.vm).toBeTruthy()
    })
})
