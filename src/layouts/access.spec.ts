import { shallowMount } from '@vue/test-utils';
import AccessLayout from "./access.vue";

describe('Access', () => {
    it('should be a vue instance', () => {
        const wrapper = shallowMount(AccessLayout, {stubs: ["Nuxt"]});
        expect(wrapper.vm).toBeTruthy()
    })
})
