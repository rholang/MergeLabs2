<template>
  <div tag="section" class="section-hero section-first">
    <div class="tm-wrapper tm-section tm-container">
      <div
        class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
      >
        Welcome to MergeLabs
      </div>
      <h1 class="title tm-rf5 tm-rf7-m-up tm-bold tm-lh-title tm-title">
        One DAG to rule them all.
      </h1>
      <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
        MergeLabs is a new scalable network for blockchain 4.0 dApps. Build on
        latest research in the reflective high order process calculus. Rholang
        runs on the Rchain world computer algorithmically constrained to obey
        our rules.
      </p>
    </div>
    <graphics-home-hero class="graphics" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-hero
  background linear-gradient(180deg, var(--fg), var(--transparent))
  text-align center

  .light-mode &
    background none

.tm-wrapper
  width 100%
  padding-bottom 0
  display flex
  flex-direction column
  align-items center

  > *
    position relative
    z-index 1

.graphics
  position relative
  z-index 0

.title
  max-width 7em
  margin var(--spacing-6) 0 0
  background linear-gradient(135deg, rgba(255,255,255,0) 56%, #ffcaba 98%), linear-gradient(25deg, #f5d1ff 23%, #fff 60%)
  -webkit-background-clip text
  -webkit-text-fill-color transparent

  &::selection
    -webkit-text-fill-color initial

  .light-mode &
    background none
    -webkit-background-clip unset
    -webkit-text-fill-color inherit

.subtitle
  margin-top var(--spacing-7)
</style>
