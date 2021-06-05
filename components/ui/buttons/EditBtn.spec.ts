import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import EditBtn from './EditBtn.vue';

describe('EditBtn', () => {
    it('should emit edit event when clicked', async () => {
        const wrapper = mount(EditBtn, { vuetify: new Vuetify() });

        wrapper.find('.v-btn').trigger('click');
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().edit).toBeTruthy()
    })
})