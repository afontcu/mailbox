import Mailbox from './index.js'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Mailbox.vue', () => {
  let store, getters

  beforeEach(() => {
    getters = {
      messages: jest.fn(() => []),
      selectedMessage: jest.fn(() => ({})),
      unreadMessagesCount: () => 3,
    }
    store = new Vuex.Store({
      getters,
    })
  })

  it('is a component', () => {
    const wrapper = mount(Mailbox, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(Mailbox, { store, localVue })
    expect(wrapper.classes()).toContain('Mailbox')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(Mailbox, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
