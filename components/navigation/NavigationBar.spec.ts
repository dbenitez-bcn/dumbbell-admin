import { shallowMount } from '@vue/test-utils';
import NavigationBar from "./NavigationBar.vue";
import Vuetify from 'vuetify';

describe('Navigation bar', () => {
    test('is a Vue instance', () => {
        const vuetify = new Vuetify();
        const wrapper = shallowMount(NavigationBar, {
            vuetify
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
