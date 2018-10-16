import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Here I load messages naively. I assume that, in a real implementation,
 * this data would come from a Rest/GraphQL API.
 * Since this is a prototype, I will just load the sample JSON and pass
 * messages down to my Mailbox component as a prop.
 */
import { messages } from '@/assets/messages.json'
import { normalizeData } from '@/normalizer.js'

export default new Vuex.Store({
  state: {
    messages,
    selectedMessageId: null,
    readMessages: [],
  },
  getters: {
    messages: state => normalizeData(state.messages),
    selectedMessage: (state, getters) =>
      getters.messages.find(({ uid }) => uid === state.selectedMessageId),
    unreadMessagesCount: state =>
      state.messages
        .map(m => m.uid)
        .filter(m => !state.readMessages.includes(m)).length,
  },
  mutations: {
    markAsSelected(state, uid) {
      state.selectedMessageId = uid
    },
    markAsRead(state, uid) {
      /**
       * Unfortunately, Vue cannot make ES6 Sets reactive (yet), so instead of
       * relying directly on them to create `readMessages` data structure,
       * I'll convert it to an array without duplicates.
       * Source: https://github.com/vuejs/vue/issues/2410
       */
      state.readMessages = [...new Set([...state.readMessages, uid])]
    },
    removeMessage(state, uid) {
      state.messages = state.messages.filter(message => message.uid !== uid)
    },
  },
})
