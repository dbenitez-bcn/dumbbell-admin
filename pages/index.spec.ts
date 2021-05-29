import { shallowMount } from '@vue/test-utils';
import HomePage from "./index.vue";

describe('Toggles page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HomePage)
    expect(wrapper.vm).toBeTruthy()
  })
})
