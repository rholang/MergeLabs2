<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <div class="header">
      <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
        Be part of the open economy of the future.
      </h2>
      <p>
        <tm-button to-link="internal" to="/features" size="l" variant="text"
          >Powerful features<span class="icon__right">&rarr;</span></tm-button
        >
      </p>
    </div>
    <div class="card card-accounts">
      <div :strength="-5" class="card-inner" type="depth">
        <h3
          :strength="-15"
          tag="h3"
          class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
        >
          Interchain Accounts
        </h3>
        <div :strength="-10" tag="figure" class="card__graphics">
          <graphics-navigator-gem class="gem" />
          <svg
            class="trail"
            width="144"
            height="43"
            viewBox="0 0 144 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.16992 41.2962C18.9059 31.6337 36.1437 23.3068 52.7061 16.8816C69.2724 10.4549 84.7498 6.09099 98.0856 4.07025C111.448 2.04554 122.227 2.4392 129.78 5.08592C137.254 7.70525 141.308 12.4196 142.035 18.8771M2.16992 1.55859C18.9059 11.2211 36.1437 19.548 52.7061 25.9732C69.2724 32.3999 84.7498 36.7638 98.0856 38.7845C111.448 40.8092 122.227 40.4156 129.78 37.7689C137.254 35.1495 141.308 30.4352 142.035 23.9777"
              stroke="url(#paint0_linear-392827)"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear-392827"
                x1="142"
                y1="21.5273"
                x2="2"
                y2="21.5273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.901042" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p
          :strength="-20"
          tag="p"
          class="card__tagline tm-rf3 tm-rf4-m-up tm-lh-title tm-bold tm-title"
        >
          One secure account for all your digital assets.
        </p>
        <p
          :strength="-15"
          tag="p"
          class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted"
        >
          Coming soon
        </p>
      </div>
    </div>
    <div class="card card-dex">
      <div :strength="-5" class="card-inner" type="depth">
        <h3
          :strength="-15"
          tag="h3"
          class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
        >
          Decentralized Exchange
        </h3>
        <figure :strength="-10" tag="figure" class="card__graphics">
          <graphics-coin-stack class="coin-stack" />
        </figure>
        <p
          :strength="-20"
          tag="p"
          class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title"
        >
          Swap tokens &amp; collectibles.
        </p>
        <p
          :strength="-15"
          tag="p"
          class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted"
        >
          Coming soon
        </p>
      </div>
    </div>
    <div class="cards-features-bottom">
      <div class="card card-pools">
        <div :strength="-5" class="card-inner" type="depth">
          <h3
            :strength="-15"
            tag="h3"
            class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
          >
            Liquidity Pools
          </h3>
          <p
            :strength="-20"
            tag="p"
            class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title"
          >
            Provide liquidity.<br />Earn rewards.
          </p>
          <p
            :strength="-15"
            tag="p"
            class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted"
          >
            Coming soon
          </p>
        </div>
      </div>
      <div class="card card-bridges">
        <div :strength="-5" class="card-inner" type="depth">
          <h3
            :strength="-15"
            tag="h3"
            class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
          >
            Wrapped ETH / BTC
          </h3>
          <p
            :strength="-20"
            tag="p"
            class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title"
          >
            + Ethereum.<br />+ Bitcoin.
          </p>
          <p
            :strength="-15"
            tag="p"
            class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted"
          >
            Coming soon
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.tm-section
  z-index 1 // Above tech stack graphics

  > *
    grid-column 1/-1

.header
  margin-bottom var(--spacing-10)

.title
  max-width 11em

.header p
  margin-top var(--spacing-6)

.card
  display flex
  flex-direction column
  margin-bottom var(--grid-gap-x)

  &-inner
    flex 1 0 auto
    display flex
    flex-direction column
    justify-content space-between
    padding var(--spacing-7)
    background var(--fg)
    border-radius $border-radius-6

.card__graphics,
.card__tagline,
.card__footnote
  margin-top var(--spacing-9)

.card__tagline
  position relative
  max-width 11em

.card__graphics
  position relative
  width 100%
  max-width 22rem

// Interchain Accounts
.card-accounts
  .gem
    position relative
    margin -43% 0 -65% -75%
    width 150%
    height auto

  .trail
    position absolute
    width 41%
    height auto
    top 51%
    left 46%

// Features > DEX
.card-dex
  .card__graphics
    margin-left auto

  .coin-stack
    margin-top -8%

// Pools & Bridges
.cards-features-bottom
  display grid
  grid-template-columns repeat(auto-fit, minmax(16rem,1fr))
  gap 0 var(--grid-gap-x)

@media $breakpoint-small
  // DEX
  .card-dex .card__graphics
    height 0
    margin-top 0

@media $breakpoint-medium
  .header
    grid-column 2 / -1

@media $breakpoint-large
  .card__tagline
    max-width 8em

  .card-accounts,
  .card-dex,
  .cards-features-bottom
    grid-column span 4

  // Interchain Accounts
  .card-accounts
    grid-row 2 / 5


@media $breakpoint-xl
  // Interchain Accounts
  .card-accounts
    grid-column 1 / span 5
    grid-row 2 / 4

  // DEX
  // Pools & Bridges
  .card-dex
  .cards-features-bottom
    grid-column span 7
</style>
