<template>
  <aside class="MailboxMessageList">
    <p class="MailboxMessageList__title">
      {{ unreadMessagesCount }} unread 
      {{ pluralize('message') }}
    </p>
    <mailbox-message-list-item v-for="message in messageList" 
                               :key="message.uid" 
                               v-bind="message"
    />
  </aside>
</template>

<script>
import MailboxMessageListItem from '@/components/MailboxMessageListItem'
import { mapState, mapGetters } from 'vuex'
import { maybePluralize } from '@/common/string'

export default {
  name: 'MailboxMessageList',
  components: {
    MailboxMessageListItem,
  },
  props: {
    messageList: { type: Array, required: true },
  },
  computed: {
    ...mapState(['readMessages']),
    ...mapGetters(['messages', 'unreadMessagesCount']),
  },
  methods: {
    pluralize(str) {
      return maybePluralize(this.unreadMessagesCount, str)
    },
  },
}
</script>

<style scoped>
.MailboxMessageList__title {
  font-style: italic;
  margin-bottom: var(--global-spacing);
}
</style>
