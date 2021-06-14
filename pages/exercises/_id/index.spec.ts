import { shallowMount } from '@vue/test-utils';
import ExerciseDetailsPage from "./index.vue";

describe('Exercise details page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ExerciseDetailsPage, {
      mocks: {
        $fetchState: {
          pending: false,
          error: false
        }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
