import { shallowMount } from '@vue/test-utils';
import ExerciseDetailsPage from "./index.vue";

describe('Exercise details page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ExerciseDetailsPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
