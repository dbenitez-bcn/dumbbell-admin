import { shallowMount, Wrapper } from '@vue/test-utils';
import AccessCard from "~/components/access/AccessCard.vue";
import { byDT } from '~~/test/TestUtils';

describe('Access card', () => {
    let wrapper: Wrapper<AccessCard>;

    beforeEach(() => {
        wrapper = shallowMount(AccessCard);
    })

    it('should show login form by default', () => {
        expect(wrapper.find(byDT("login-form")).exists()).toBeTruthy();
        expect(wrapper.find(byDT("register-form")).exists()).toBeFalsy();
    })
    it('when clicking to register should show register form', async () => {
        wrapper.find(byDT("register-tab")).trigger("click");
        await wrapper.vm.$nextTick();
        
        expect(wrapper.find(byDT("login-form")).exists()).toBeFalsy();
        expect(wrapper.find(byDT("register-form")).exists()).toBeTruthy();
    })
    it('when clicking to login should show register form', async () => {
        wrapper.find(byDT("login-tab")).trigger("click");
        await wrapper.vm.$nextTick();
        
        expect(wrapper.find(byDT("login-form")).exists()).toBeTruthy();
        expect(wrapper.find(byDT("register-form")).exists()).toBeFalsy();
    })
})
