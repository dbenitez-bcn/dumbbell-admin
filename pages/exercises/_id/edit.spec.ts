import { shallowMount } from '@vue/test-utils';
import ExerciseEditPage from "./edit.vue";

describe('Exercise edit page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ExerciseEditPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
