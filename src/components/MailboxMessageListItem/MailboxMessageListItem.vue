<template>
  <a class="MailboxMessageListItem" 
     href="#"
     :class="[ classes ]"
     @click="selectMessage"
  >
    <div class="MailboxMessageListItem__header">
      <p class="MailboxMessageListItem__title">{{ sender }}</p>
      <button class="MailboxMessageListItem__remove-button"
              @click="handleRemove"
      >
        <icon-cross aria-label="Delete the message" />
      </button>
    </div>
    <p class="MailboxMessageListItem__subject">{{ subject }}</p>
    <p class="MailboxMessageListItem__date">{{ date }}</p>
  </a>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import IconCross from '@/components/IconCross'

export default {
  name: 'MailboxMessageListItem',
  components: {
    IconCross,
  },
  props: {
    uid: { type: String, required: true },
    sender: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: String, required: true },
  },
  computed: {
    ...mapState(['readMessages', 'selectedMessageId']),
    classes() {
      return {
        'MailboxMessageListItem--unread': !this.readMessages.includes(this.uid),
        'MailboxMessageListItem--selected': this.selectedMessageId === this.uid,
      }
    },
  },
  methods: {
    ...mapMutations(['markAsRead', 'markAsSelected', 'removeMessage']),
    selectMessage() {
      this.markAsSelected(this.uid)
      this.markAsRead(this.uid)
    },
    handleRemove(e) {
      e.stopPropagation()
      this.removeMessage(this.uid)
    },
  },
}
</script>

<style scoped>
:root {
  --item-border-width: 4px;
}

.MailboxMessageListItem + .MailboxMessageListItem {
  margin-top: var(--global-spacing);
}

.MailboxMessageListItem {
  padding: var(--global-spacing);
  position: relative;
  display: block;

  color: initial;
  text-decoration: none;
  border-left: var(--item-border-width) solid transparent;
  border-radius: var(--global-radius);
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  transition: all ease var(--global-transition);
}

.MailboxMessageListItem:not(.MailboxMessageListItem--selected):hover {
  background-color: var(--color-primary-light);
  box-shadow: 0px 2px 6px 0 rgba(63, 63, 68, 0.21);
}

.MailboxMessageListItem--unread {
  border-left: var(--item-border-width) solid var(--color-primary);
}

.MailboxMessageListItem--selected {
  transform: translateX(calc(2px + var(--global-spacing)));

  border-left: var(--item-border-width) solid var(--color-secondary);
  box-shadow: -5px 2px 6px 0 rgba(63, 63, 68, 0.21);
}

.MailboxMessageListItem__header {
  display: flex;
  justify-content: space-between;
}

.MailboxMessageListItem__remove-button {
  color: var(--color-text-muted);
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

.MailboxMessageListItem__title {
  font-weight: bold;
}

.MailboxMessageListItem__subject {
  margin: var(--global-spacing-small) 0 var(--global-spacing);
}

.MailboxMessageListItem__date {
  font-style: italic;
  color: var(--color-text-muted);
}
</style>
