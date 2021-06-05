import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import DeleteBtn from './DeleteBtn.vue';

describe('DeleteBtn', () => {
    it('should emit edit event when clicked', async () => {
        const wrapper = mount(DeleteBtn, { vuetify: new Vuetify() });

        wrapper.find('.v-btn').trigger('click');
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().delete).toBeTruthy()
    })
})