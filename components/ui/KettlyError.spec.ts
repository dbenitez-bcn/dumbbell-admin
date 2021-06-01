import { shallowMount } from '@vue/test-utils';
import KettlyError from "./KettlyError.vue";

describe('KettlyError', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(KettlyError)
    expect(wrapper.vm).toBeTruthy()
  })
})
