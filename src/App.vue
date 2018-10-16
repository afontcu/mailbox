<template>
  <div id="app">
    <Mailbox />
  </div>
</template>

<script>
import Mailbox from '@/components/Mailbox'

export default {
  name: 'app',
  components: {
    Mailbox,
  },
}
</script>

<style>
:root {
  --color-primary: #5c6ac4;
  --color-primary-light: #f4f5fa;
  --color-secondary: #9c6ade;
  --color-text: #212b36;
  --color-text-muted: #919eab;

  --global-spacing: 12px;
  --global-spacing-small: calc(var(--global-spacing) / 2);
  --global-spacing-large: calc(var(--global-spacing) * 2);

  --global-radius: 3px;
  --global-transition: 0.15s;
}

body {
  margin: 0;
  padding: 0;

  background-color: var(--color-primary-light);
  border-top: 3px solid transparent;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary)
  );
}

p {
  margin: 0;
}

#app {
  font-family: 'Avenir', -apple-system, BlinkMacSystemFont, “Segoe UI”, “Roboto”,
    “Oxygen”, “Ubuntu”, “Cantarell”, “Fira Sans”, “Droid Sans”, “Helvetica Neue”,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
