<template>
  <svg :viewPort="viewPort"
       :width="size"
       :height="size"
       :aria-label="ariaLabel"
       version="1.1"
       xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="1"
          :y1="size - 1" 
          :x2="size - 1"
          y2="1" 
          stroke="currentColor" 
          stroke-width="2"
    />
    <line x1="1"
          y1="1" 
          :x2="size - 1"
          :y2="size - 1" 
          stroke="currentColor" 
          stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconCross',
  props: {
    size: { type: String, default: '12' },
    ariaLabel: { type: String, default: '' },
  },
  computed: {
    viewPort() {
      return `0 0 ${this.size} ${this.size}`
    },
  },
}
</script>
