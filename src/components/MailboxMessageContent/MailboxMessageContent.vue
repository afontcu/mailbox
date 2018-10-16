<template>
  <main class="MailboxMessageContent">
    <div v-if="uid" class="MailboxMessageContent__wrapper">
      <h2>{{ subject }}</h2>
      <p class="MailboxMessageContent__message">{{ message }}</p>
      <div class="MailboxMessageContent__meta">
        <p>{{ sender }}</p>
        <p>{{ date }}</p>
      </div>
    </div>
    <p v-else class="MailboxMessageContent__no-message">
      Select a message to display its content.
    </p>
  </main>
</template>

<script>
export default {
  name: 'MailboxMessageContent',
  props: {
    uid: { type: String, default: '' },
    sender: { type: String, default: '' },
    subject: { type: String, default: '' },
    date: { type: String, default: '' },
    message: { type: String, default: '' },
  },
}
</script>

<style scoped>
:root {
  --content-shadow-color: rgba(63, 63, 68, 0.15);
}

.MailboxMessageContent {
  display: flex;
}

.MailboxMessageContent__no-message {
  flex: 1;
  align-self: center;
  text-align: center;
}

.MailboxMessageContent__wrapper {
  padding: var(--global-spacing-large);
  margin: 0;

  background-color: #fff;
  transition: all ease var(--global-transition);
  border-radius: var(--global-radius);
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 var(--content-shadow-color);
}

.MailboxMessageContent__message {
  font-size: 1.2rem;
  line-height: 1.5;
}

.MailboxMessageContent__meta {
  display: flex;
  justify-content: space-between;
  padding-top: var(--global-spacing-large);
  margin-top: var(--global-spacing-large);

  border-top: 1px solid var(--content-shadow-color);
  font-weight: bold;
}
</style>
