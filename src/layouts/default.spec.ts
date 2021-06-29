import { shallowMount } from '@vue/test-utils';
import DefaultLayout from "./default.vue";

describe('Default', () => {
    it('should show the navigation bar when user is logged in', () => {
        const wrapper = shallowMount(DefaultLayout, {
            mocks: {
                $auth: {
                    loggedIn: true
                }
            }
        })

        expect(wrapper.find('NavigationBar').exists()).toBeTruthy()
    })
    it('should not show the navigation bar when user is not logged in', () => {
        const wrapper = shallowMount(DefaultLayout, {
            mocks: {
                $auth: {
                    loggedIn: false
                }
            }
        })

        expect(wrapper.find('NavigationBar').exists()).toBeFalsy()
    })
})
