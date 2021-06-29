import { shallowMount } from "@vue/test-utils";
import { byDT } from "~~/test/TestUtils";
import DifficultDots from './DifficultDots.vue';

describe('DifficultDots', () => {
    it('Given a 7 should render 4 full and 1 empty dots', () => {
        const value = 7;
        const wrapper = shallowMount(DifficultDots, {
            propsData: {
                value
            }
        });

        expect(wrapper.findAll(byDT('full-dot')).length).toBe(4);
        expect(wrapper.findAll(byDT('empty-dot')).length).toBe(1);
    })
    it('Given a 10 should render 5 full and 0 empty dots', () => {
        const value = 10;
        const wrapper = shallowMount(DifficultDots, {
            propsData: {
                value
            }
        });

        expect(wrapper.findAll(byDT('full-dot')).length).toBe(5);
        expect(wrapper.findAll(byDT('empty-dot')).length).toBe(0);
    })
    it('Given a 1 should render 1 full and 4 empty dots', () => {
        const value = 1;
        const wrapper = shallowMount(DifficultDots, {
            propsData: {
                value
            }
        });

        expect(wrapper.findAll(byDT('full-dot')).length).toBe(1);
        expect(wrapper.findAll(byDT('empty-dot')).length).toBe(4);
    })
})