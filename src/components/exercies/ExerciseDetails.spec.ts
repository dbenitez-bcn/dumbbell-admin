import { shallowMount } from '@vue/test-utils';
import ExerciseVM from '../../models/viewModels/ExerciseVM';
import ExerciseDetails from "./ExerciseDetails.vue";

describe('Exercise details', () => {
    test('is a Vue instance', () => {
        const exercise = new ExerciseVM(1, "Name", "description", 5);
        const wrapper = shallowMount(ExerciseDetails, {
            propsData: {
                exercise
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
