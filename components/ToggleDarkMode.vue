<template>
  <div class="flex">
    <div class="color" @click="toggleColorMode">
      {{ $colorMode.value }}
    </div>
    <component :is="`icon-${$colorMode.value}-mode`" class="icon" />
  </div>
</template>

<script>
import IconLightMode from '~/components/icons/IconLightMode.vue'
import IconDarkMode from '~/components/icons/IconDarkMode.vue'

export default {
  components: {
    IconLightMode,
    IconDarkMode,
  },
  props: {
    color: {
      type: String,
      default: 'dark',
    },
  },
  data() {
    return {
      colors: ['dark', 'light'],
    }
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style lang="stylus" scoped>
/* dark mode styling in _base.styl */

.color
  text-transform capitalize
  margin-right var(--spacing-3)
  cursor pointer


.flex
  display flex
  flex-direction row
  align-items center
  color var(--white-500)

  .light-mode &
    color var(--trans-gray-400)
</style>
