<template>
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" :fill="iconColor" />
  </svg>
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: () => {},
    },
  },
}
</script>
<style lang="stylus" scoped>
.dot
  margin-left 0.5rem
</style>
