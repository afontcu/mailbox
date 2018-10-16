import MailboxMessageListItem from './index.js'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const propsData = {
  uid: '1',
  sender: 'sender name',
  subject: 'subject',
  date: 'Tue 29 March, 12:52',
}

describe('MailboxMessageListItem.vue', () => {
  let store, mutations, state

  beforeEach(() => {
    state = {
      messages: [],
      readMessages: [],
    }
    mutations = {
      markAsRead: jest.fn(),
      markAsSelected: jest.fn(),
      removeMessage: jest.fn(),
    }
    store = new Vuex.Store({
      mutations,
      state,
    })
  })

  it('is a component', () => {
    const wrapper = mount(MailboxMessageListItem, {
      propsData,
      store,
      localVue,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(MailboxMessageListItem, {
      propsData,
      store,
      localVue,
    })
    expect(wrapper.classes()).toContain('MailboxMessageListItem')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(MailboxMessageListItem, {
      propsData,
      store,
      localVue,
    })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
