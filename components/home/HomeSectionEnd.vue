<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <img src="~/assets/images/bg/home-end-bg.png" class="bg" />
    <header class="header">
      <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
        Enter the Cosmos
      </h2>
      <p
        class="subtitle offset tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
      >
        Whether you’re a developer, token holder, or new to it all, there’s a
        place for everyone in Cosmos.
      </p>
    </header>
    <div class="cards">
      <div class="card card-intro">
        <tm-link href="https://v1.cosmos.network/intro">
          <div :strength="-5" class="card-inner" type="depth">
            <figure :strength="-10" tag="figure" class="card__graphics">
              <graphics-home-end-intro class="graphics" />
            </figure>
            <div :strength="-20" class="card__text">
              <div
                class="card__overline tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
              >
                Learn
              </div>
              <h3 class="card__title tm-rf2 tm-lh-title tm-bold tm-title">
                Welcome to Cosmos &rarr;
              </h3>
              <p class="card__desc tm-rf-1 tm-rf0-m-up tm-lh-copy">
                Read the vision of Cosmos and learn about the powerful
                blockchain technology that makes it possible.
              </p>
            </div>
          </div>
        </tm-link>
      </div>
      <div class="card card-atom">
        <nuxt-link to="learn/staking">
          <div :strength="-5" class="card-inner" type="depth">
            <figure class="card__graphics">
              <div class="graphics">
                <div :strength="-15" class="coin">
                  <img src="~/assets/images/coin-atom.svg" />
                </div>
                <div :strength="-10" class="coin">
                  <img src="~/assets/images/coin-atom.svg" />
                </div>
                <div :strength="-25" class="coin">
                  <img src="~/assets/images/coin-atom.svg" />
                </div>
              </div>
            </figure>
            <div :strength="-20" class="card__text">
              <div
                class="card__overline tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
              >
                Stake
              </div>
              <h3 class="card__title tm-rf2 tm-lh-title tm-bold tm-title">
                Discover the ATOM &rarr;
              </h3>
              <p class="card__desc tm-rf-1 tm-rf0-m-up tm-lh-copy">
                ATOM secures and governs the Cosmos Hub, the first blockchain in
                the Cosmos Network.
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="card card-ecosystem">
        <nuxt-link to="ecosystem/apps">
          <div :strength="-5" class="card-inner" type="depth">
            <figure :strength="-10" tag="figure" class="card__graphics">
              <graphics-home-end-ecosystem class="graphics" />
            </figure>
            <div :strength="-20" class="card__text">
              <div
                class="card__overline tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
              >
                Discover
              </div>
              <h3 class="card__title tm-rf2 tm-lh-title tm-bold tm-title">
                Explore the ecosystem &rarr;
              </h3>
              <p class="card__desc tm-rf-1 tm-rf0-m-up tm-lh-copy">
                Browse the ever-expanding, diverse collection of apps, services,
                and tools built on Cosmos to date.
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.tm-section
  padding-top var(--spacing-13)

.header,
.cards
  grid-column 1/-1

.bg
  position absolute
  width 138%
  max-width none
  top 0
  margin-left -19%
  margin-top -12%
  filter blur(10px)
  user-select none

.header
  position relative
  grid-column 1/-1
  z-index 1
  text-align center

.subtitle
  margin-top var(--spacing-6)
  center()

.cards
  display grid
  grid-template-columns repeat(auto-fit, minmax(16rem, 1fr))
  grid-gap 0 var(--grid-gap-x)
  margin-top var(--spacing-9)
  justify-items center

.card
  position relative
  max-width 28rem
  margin-top var(--grid-gap-x)
  display flex
  flex-direction column
  z-index 2

  a,
  &-inner
    flex 1 0 auto
    display flex
    flex-direction column

  &-inner
    justify-content space-between
    padding var(--spacing-7)
    background var(--fg)
    border-radius $border-radius-6

.cart__overline,
.card__title,
.card__desc
  position relative

.card__title
  margin-top var(--spacing-5)
  max-width 7em

.card__desc
  margin-top var(--spacing-5)

  .card a:hover &,
  .card a:focus &
    color var(--title)

.card__graphics
  width 100%
  max-width 22rem
  margin auto

  .graphics
    position relative
    height auto

.card-intro
  .graphics
    width 142%
    margin-left -25%
    margin-top -23%
    margin-bottom -40%

.card-atom
  .graphics
    padding-bottom 89%
    margin-top -13%

  .coin
    position absolute
    width 73%

  .coin:first-child
    top -8%
    left 16%
    img
      transform rotate(15deg)

  .coin:nth-child(2)
    top 49%
    left 35%
    img
      transform rotate(30deg)

  .coin:last-child
    top 21%
    left 7%
    width 77%
    img
      transform rotate(-15deg)

.card-ecosystem
  .card-inner
    overflow hidden
</style>
