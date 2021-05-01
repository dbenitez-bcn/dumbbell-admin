import { shallowMount } from '@vue/test-utils';
import AccessPage from "~/pages/access/index.vue";

describe('Access page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AccessPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
