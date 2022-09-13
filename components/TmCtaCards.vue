<template>
  <div class="tm-container">
    <div class="cards">
      <div v-for="item in data" :key="item.title">
        <nuxt-link
          v-if="item.href.startsWith('/')"
          :to="item.href"
          class="card-item"
        >
          <div v-if="item.graphics" class="graphics">
            <component :is="`${item.graphics}`" class="graphics__item" />
          </div>
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"
          >
            {{ item.overline }}
          </div>
          <div class="title tm-rf2 tm-bold tm-lh-title">{{ item.title }}</div>
        </nuxt-link>
        <tm-link v-else :href="item.href" class="card-item">
          <div v-if="item.graphics" class="graphics">
            <component :is="`${item.graphics}`" class="graphics__item" />
          </div>
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"
          >
            {{ item.overline }}
          </div>
          <div class="title tm-rf2 tm-bold tm-lh-title tm-title">
            {{ item.title }}
          </div>
        </tm-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus" scoped>
.cards
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  position relative

.card-item
  position relative
  padding var(--spacing-8)
  display flex
  flex-direction column
  flex-wrap nowrap
  justify-content flex-end
  height 20.5rem
  border-radius $border-radius-5
  hover-raise(-3px)
  color var(--white)
  background-color var(--gray-100)

  .light-mode &
    color var(--gray-100)
    background-color var(--white)

  &:focus
    outline 0

.card-item
  .overline
  .title
    width fit-content
    position relative
    z-index 1

.graphics
  position absolute
  top 0
  left 0
  width 100%
  display grid
  place-items flex-end

  &__item
    width 80%
    height auto

.title
  margin-top var(--spacing-3)

@media $breakpoint-xsmall-only
  .card-item
    height auto
    min-height 16rem
    border-radius $border-radius-4

@media $breakpoint-medium
  .graphics__item
    width 60%

@media $breakpoint-large
  .cards
    grid-template-columns 1fr 1fr

  .graphics
    top -70px
    left -130px
    width 130%
</style>
