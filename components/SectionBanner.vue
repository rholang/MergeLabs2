<template>
  <div class="tm-wrapper tm-section">
    <div class="tm-container tm-grid-base banner-item">
      <div class="text">
        <div class="title tm-rf5 tm-bold tm-lh-title">
          Ready to start staking?
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy">
          Start staking ATOM on the Cosmos Hub.
        </div>
        <tm-button to-link="internal" to="/learn/get-atom" size="l" class="btn"
          >Stake ATOM</tm-button
        >
      </div>
      <div class="graphics">
        <graphics-banner-background class="graphics__back" />
        <graphics-banner-foreground class="graphics__front" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.banner-item
  display block
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  color var(--white)
  background var(--gray-100)
  overflow hidden

  .light-mode &
    color var(--black)
    background var(--white)

.banner-item .text
  padding var(--spacing-7)
  grid-column span 4
  position relative
  z-index 1

.banner-item .graphics
  padding var(--spacing-10)
  grid-column span 12
  position relative
  display grid
  place-items self-end

  &__back
    width 210%
    height auto
    bottom 0
    position absolute
    z-index 0

  &__front
    width 80%
    height auto
    position absolute
    right 0
    bottom -2rem

.banner-item .title
  width fit-content

.banner-item .subtitle
  margin-top var(--spacing-5)
  width fit-content

.banner-item .btn
  margin-top var(--spacing-8)

@media $breakpoint-medium
  .banner-item
    display grid
    overflow visible

  .banner-item .text
    padding var(--spacing-10)
    grid-column 1/ 9

  .banner-item .graphics
    padding 0
    position relative
    z-index 0
    margin-top 0

    &__back
      position absolute
      max-width 110%
      bottom 0

    &__front
      position absolute
      max-width 40%
      right 2%
</style>
