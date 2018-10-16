import MailboxMessageList from './index.js'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const propsData = {
  messageList: [],
}

describe('MailboxMessageList.vue', () => {
  let store, getters, state

  beforeEach(() => {
    state = {
      messages: [],
      readMessages: [],
    }
    getters = {
      messages: () => [],
      unreadMessagesCount: () => 3,
    }
    store = new Vuex.Store({
      getters,
      state,
    })
  })

  it('is a component', () => {
    const wrapper = mount(MailboxMessageList, { propsData, store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(MailboxMessageList, { propsData, store, localVue })
    expect(wrapper.classes()).toContain('MailboxMessageList')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(MailboxMessageList, { propsData, store, localVue })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
