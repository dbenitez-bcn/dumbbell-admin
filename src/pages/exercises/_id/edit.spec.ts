import { shallowMount } from '@vue/test-utils';
import ExerciseEditPage from "./edit.vue";

describe('Exercise edit page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ExerciseEditPage, {
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
