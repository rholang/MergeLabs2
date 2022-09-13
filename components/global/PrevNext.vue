<template>
  <div class="tm-section prev-next-container">
    <nuxt-link v-if="prev" :to="`/learn/faq/${prev.slug}`">
      {{ prev.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link v-if="next" :to="`/learn/faq/${next.slug}`">
      {{ next.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="stylus" scoped>
.prev-next-container
  display flex
  justify-content space-between
</style>
