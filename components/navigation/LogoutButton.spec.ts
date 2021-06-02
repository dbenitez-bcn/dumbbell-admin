import { shallowMount } from '@vue/test-utils';
import LogoutButton from "./LogoutButton.vue";

describe('Logout button', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(LogoutButton)
    expect(wrapper.vm).toBeTruthy()
  })
})
