import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cloneDeep from 'lodash.clonedeep'
import store from './store'

beforeEach(() => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  /**
   * Since we are using dummy Data, I'll use the same store setup
   * (including the dummy JSON object) for the tests. In a real scenario,
   * I'd mock `state.messages` object with specific fake data for the tests.
   */
  const store = new Vuex.Store(cloneDeep(store))
})

test('sets message as selected', () => {
  const id = '21'
  expect(store.state.selectedMessageId).toBeNull()

  store.commit('markAsSelected', id)

  expect(store.state.selectedMessageId).toBe(id)
})

test('sets message as read', () => {
  const id = '21'
  const totalMessages = store.state.messages.length

  expect(store.state.readMessages).toHaveLength(0)
  expect(store.getters.unreadMessagesCount).toBe(totalMessages)

  store.commit('markAsRead', id)

  expect(store.state.readMessages).toHaveLength(1)
  expect(store.state.readMessages).toEqual([id])
  expect(store.getters.unreadMessagesCount).toBe(totalMessages - 1)
})

test('removes message', () => {
  const totalMessages = store.state.messages.length

  expect(store.state.messages).toHaveLength(totalMessages)

  store.commit('removeMessage', '21')

  expect(store.state.messages).toHaveLength(totalMessages - 1)
})
