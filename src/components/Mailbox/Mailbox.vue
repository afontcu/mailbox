<template>
  <div class="Mailbox">
    <h1 class="Mailbox__title">Mailbox</h1>
    <div class="Mailbox__grid">
      <mailbox-message-list :messageList="messages" />
      <mailbox-message-content v-bind="selectedMessage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MailboxMessageList from '@/components/MailboxMessageList'
import MailboxMessageContent from '@/components/MailboxMessageContent'

export default {
  name: 'Mailbox',
  components: {
    MailboxMessageList,
    MailboxMessageContent,
  },
  computed: {
    ...mapGetters(['messages', 'selectedMessage']),
  },
}
</script>

<style>
.Mailbox {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 var(--global-spacing);
}

.Mailbox__title {
  margin-bottom: var(--global-spacing-large);
  padding-bottom: var(--global-spacing-large);

  text-align: center;
  font-weight: bold;
}

.Mailbox__grid {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: var(--global-spacing);
}
</style>
