import { shallowMount } from '@vue/test-utils';
import Spinner from "./Spinner.vue";

describe('Spinner', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Spinner)
    expect(wrapper.vm).toBeTruthy()
  })
})
