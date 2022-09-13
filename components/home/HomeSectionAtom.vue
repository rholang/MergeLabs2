<template>
  <div event="scroll" class="tm-section tm-container tm-wrapper">
    <div class="bg-sunrise-container">
      <graphics-bg-sunrise class="bg-sunrise" :sun="false" />
    </div>
    <div class="graphics graphics-top">
      <div class="coins-top">
        <div class="coin">
          <div :origin-y="0" :strength="50" type="translate" axis="y">
            <div :strength="-30" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
        <div class="coin">
          <div :origin-y="0" :strength="60" type="translate" axis="y">
            <div :strength="-40" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
        <div class="coin">
          <div :origin-y="0" :strength="80" type="translate" axis="y">
            <div :strength="50" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
        <div class="coin">
          <div :origin-y="0" :strength="100" type="translate" axis="y">
            <div :strength="-60" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
        <div class="coin">
          <div :strength="200" :origin-y="0" type="translate" axis="y">
            <div :strength="80" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <span class="tm-crosshair"></span>
      <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
        Secured by the ATOM.
      </h2>
      <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrower">
        In return for securing the services on the Cosmos Hub, transaction fees
        and staking rewards are distributed to ATOM stakers.
      </p>
      <div class="btn-group">
        <tm-button to-link="internal" to="/learn/get-atom" size="l" class="btn"
          >Start staking <span class="icon__right">&rarr;</span></tm-button
        >
        <tm-button
          to-link="internal"
          to="/learn/staking"
          size="l"
          variant="text"
          class="btn"
          >Learn more <span class="icon__right">&rarr;</span></tm-button
        >
      </div>
      <span class="accent"></span>
    </div>
    <div class="graphics">
      <div class="coins-bottom">
        <div class="coin">
          <div :strength="60" :origin-y="0" type="translate" axis="y">
            <div :strength="-80" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
        <div class="coin">
          <div :strength="120" :origin-y="0" type="translate" axis="y">
            <div :strength="50" type="rotate">
              <img src="~/assets/images/coin-atom.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.tm-section
  display flex
  flex-direction column
  align-items center
  text-align center
  padding-bottom var(--spacing-13)

.bg-sunrise-container
  position absolute
  display flex
  justify-content center
  width 100%
  min-width 64rem
  bottom 0
  z-index 0

.bg-sunrise
  width 120%
  bottom 0

// Animations
@keyframes float
  0%
    transform translateY(0%) rotate(0)
  100%
    transform translateY(-20%) rotate(-5deg)

.content
  position relative
  max-width 40rem
  center()
  z-index 1

.graphics
  position relative
  width 100%
  min-width 36rem
  max-width 64rem
  center()

.coin
  position absolute
  height auto
  img
    width 100%
    max-width none
    height auto
    // animation float 3s ease-in-out alternate infinite

.coins-top
  $w = round(367 / (64 * 16) * 100%) // graphics mw / container mw
  position absolute
  left -7%
  width $w
  padding-bottom ceil($w * 1.05%, 1)
  margin-top -19%

  .coin
    position absolute

  .coin:nth-child(1)
    bottom 75%
    right 67%
    width 38%
    filter blur(4px)
  .coin:nth-child(2)
    bottom 57%
    right 60%
    width 42%
    filter blur(3px)
    img
      transform rotate(-62deg)
      animation-delay 0.5s
  .coin:nth-child(3)
    bottom 41%
    right 52%
    width 42%
    filter blur(1.5px)
    img
      transform rotate(46deg)
      animation-delay 1s
  .coin:nth-child(4)
    bottom 20%
    right 24%
    width 74%
    filter blur(0.5px)
    img
      transform rotate(-17deg)
      animation-delay 1.5s
  .coin:nth-child(5)
    bottom 1%
    right -7%
    width 87%
    img
      transform rotate(29deg)
      animation-delay 2s

.coins-bottom
  $w = round(430 / (64 * 16) * 100%) // graphics mw / container mw
  position relative
  width $w
  padding-bottom ($w * .75)
  min-width 20rem
  center()

  .coin:nth-child(1)
    width 48%
    left 0
    top 6%
    filter blur(1.5px)
    img
      transform rotate(28deg)

  .coin:nth-child(2)
    width 88%
    left -17%
    top 20%
    img
      transform rotate(323deg)

.tm-crosshair
  margin-left auto
  margin-right -3rem

.title
  max-width 6em
  center()

.subtitle
  center()
  margin-top var(--spacing-6)

.btn-group
  position relative
  z-index 1
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--grid-gap-x)

.accent
  angle-accent(sw)
  margin-top var(--spacing-8)

@media $breakpoint-medium-max
  .graphics-top
    margin-top var(--spacing-11)
    margin-bottom var(--spacing-10)

@media $breakpoint-small
  .btn-group
    display block

@media $breakpoint-medium
  .coins-bottom
    margin-right 0
    right -27%
    margin-top -30%
</style>
