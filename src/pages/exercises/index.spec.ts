import { shallowMount } from '@vue/test-utils';
import ExercisesPage from "./index.vue";

describe('Exercises page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ExercisesPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
