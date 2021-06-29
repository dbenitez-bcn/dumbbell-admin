import { mount, shallowMount } from '@vue/test-utils';
import LogoutButton from "./LogoutButton.vue";
import Vuetify from 'vuetify'

describe('Logout button', () => {
  const $auth = {
    logout: jest.fn()
  }
  const sut = mount(LogoutButton, {
    mocks: {
      $auth
    },
    vuetify: new Vuetify()
  })
  it('should logout the user', () => {
    sut.find('.v-list-item').trigger('click');

    expect($auth.logout).toBeCalled();
  })
})
