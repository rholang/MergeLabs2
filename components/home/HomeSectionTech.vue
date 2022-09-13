<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <div class="graphics">
      <graphics-hub-tech-stack />
      <span class="tm-crosshair"></span>
    </div>
    <header class="header">
      <h2
        class="overline tm-rf-1 tm-rf0-m-up tm-lh-title tm-medium tm-overline tm-muted"
      >
        Technology
      </h2>
      <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
        The most trusted way to build value.
      </div>
    </header>
    <div class="text">
      <p class="tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
        <tm-link href="https://github.com/cosmos/cosmos-sdk" class="tm-medium"
          >Cosmos SDK</tm-link
        >
        is a state-of-the-art blockchain framework that powers the Cosmos Hub
        and its rapidly expanding orbit of sovereign chains.
      </p>
      <p class="tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
        Developers can use the SDK to build innovative applications that create
        value through exchange with the Cosmos Hub.
      </p>
    </div>
    <div class="stat stat-pos">
      <h3
        class="stat-title tm-rf-1 tm-rf0-m-up tm-lh-title tm-medium tm-overline tm-muted"
      >
        Proof-of-Stake
      </h3>
      <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
        <icon-plant-leaf class="icon" />99%<span
          class="tm-rf-1 tm-rf1-m-up tm-rf2-l-up tm-lh-title tm-bold super"
          >lower carbon footprint</span
        >
      </div>
      <p class="stat-subtitle tm-rf-1 tm-rf0-m-up tm-lh-title">
        Blockchain tech that truly scales.
      </p>
    </div>
    <div class="stat stat-fees">
      <h3
        class="stat-title tm-rf-1 tm-rf0-m-up tm-lh-title tm-medium tm-overline tm-muted"
      >
        Low fees
      </h3>
      <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">$0.01</div>
      <p class="stat-subtitle tm-rf-1 tm-rf0-m-up tm-lh-title">
        Enjoy the lowest fees – almost zero.
      </p>
    </div>
    <div class="stat stat-tx">
      <h3
        class="stat-title tm-rf-1 tm-rf0-m-up tm-lh-title tm-medium tm-overline tm-muted"
      >
        Fast transactions
      </h3>
      <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">7 sec</div>
      <p class="stat-subtitle tm-rf-1 tm-rf0-m-up tm-lh-title">
        Transactions confirmed in seconds.
      </p>
    </div>
  </div>
</template>

<script>
import IconPlantLeaf from '~/components/icons/IconPlantLeaf.vue'

export default {
  components: {
    IconPlantLeaf,
  },
}
</script>

<style lang="stylus" scoped>
.tm-section > *
  grid-column 1/-1

.graphics,
.overline,
.title,
.text,
.stat
  position relative

.graphics
  min-width 23rem

  >>> .tech-stack
    right var(--spacing-11)
    margin-top -20%
    margin-bottom -20%

.tm-crosshair
  margin-bottom var(--spacing-6)

.title
  max-width 9em
  margin-top var(--spacing-6)
  background linear-gradient(224deg, #e3a6ff 20%, var(--title) 90%)
  -webkit-background-clip text
  -webkit-text-fill-color transparent

.text
  margin-top var(--spacing-8)

  &:before
    content ""
    angle-accent(nw)
    margin-left calc(-1 * var(--grid-gap-x))
    margin-bottom var(--spacing-5)

.stat
  margin-top var(--spacing-10)

  .super
    margin-left var(--spacing-2)

.stat-value
  display flex
  align-items flex-start
  margin var(--spacing-3) 0

.stat-pos
  .icon
    align-self start
    margin-top var(--spacing-4)
    margin-right var(--spacing-1)

  .stat-value
    align-items center

  .super
    max-width 4.5em
    margin-left var(--spacing-6)

@media $breakpoint-small
  .tm-section > *
    grid-column auto

  .graphics
    grid-column 1/-1

  .header,
  .text
    grid-column 2 / -1

  .stat
    grid-column span 2

@media $breakpoint-medium
  .text
    margin-top var(--spacing-9)

  .stat
    grid-column span 4

  .stat-value
    margin var(--spacing-4) 0

@media $breakpoint-large
  .tm-crosshair
    margin-top -6rem

@media $breakpoint-xl
  .header
    grid-column 2 / span 8

  .text,
  .stat-fees
    grid-column 2 / span 5

  .stat-pos,
  .stat-tx
    grid-column 8 / span 5
</style>
