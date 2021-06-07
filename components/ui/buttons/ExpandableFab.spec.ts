import { shallowMount } from "@vue/test-utils";
import { byDT } from "~/test/TestUtils";
import ExpandableFab from './ExpandableFab.vue';

describe('Expandable fab', () => {
    it('Should toggle the expanded state', () => {
        const wrapper = shallowMount(ExpandableFab);
        expect(wrapper.vm.$data.isExpanded).toBeFalsy();
        wrapper.find(byDT("button")).trigger('click');
        expect(wrapper.vm.$data.isExpanded).toBeTruthy();
    })
});