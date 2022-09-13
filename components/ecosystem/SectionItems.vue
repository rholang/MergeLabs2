<template>
  <div class="section-items tm-section tm-container tm-wrapper">
    <div class="section-items-heading text log tm-rf3 tm-bold tm-lh-title">
      {{ sectionTitle }}
    </div>
    <div class="card-items">
      <CardItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import CardItem from '~/components/ecosystem/CardItem.vue'

export default {
  components: {
    CardItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    sectionTitle: { type: String, default: '' },
  },
}
</script>

<style lang="stylus" scoped>
.section-items-heading
  margin-bottom 3rem

.card-items
  display grid
  gap var(--spacing-6)

@media $breakpoint-medium
  .card-items
    grid-template-columns 1fr 1fr
    gap var(--spacing-7)

@media $breakpoint-xl
  .card-items
    grid-template-columns 1fr 1fr 1fr
    gap var(--spacing-8)
</style>
