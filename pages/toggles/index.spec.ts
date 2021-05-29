import { shallowMount } from '@vue/test-utils';
import Togglespage from "~/pages/toggles/index.vue";

describe('Toggles page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Togglespage)
    expect(wrapper.vm).toBeTruthy()
  })
})
