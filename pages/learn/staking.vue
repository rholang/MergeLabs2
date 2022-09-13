<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-container tm-wrapper tm-grid-base">
        <div class="text">
          <div class="title tm-rf7 tm-bold tm-lh-title tm-title">Staking</div>
          <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrower">
            Help secure the Cosmos Hub and earn rewards
          </div>
        </div>
      </div>
      <graphics-staking-hero class="graphics" />
    </div>

    <div class="tm-container tm-wrapper tm-section tm-grid-base">
      <div class="section-intro">
        <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
          What is staking?
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
          Staking is the process of locking up a digital asset (ATOM in the case
          of the Cosmos Hub) to provide economic security for a public
          blockchain.
        </div>
      </div>
      <div class="cards-wrapper tm-grid-base section">
        <div class="card-item">
          <span class="accent"></span>
          <div class="graphics">
            <graphics-staking-1 class="graphics__item" />
          </div>
          <div class="text">
            <div class="title tm-rf3 tm-bold tm-lh-title tm-title">
              Secure<br />the chain
            </div>
            <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              With ATOM, you have the superpower to contribute to the security
              and governance of the Cosmos Hub.
            </div>
          </div>
        </div>
        <div class="card-item">
          <span class="accent"></span>
          <div class="graphics">
            <graphics-staking-2 class="graphics__item" />
          </div>
          <div class="text">
            <div class="title tm-rf3 tm-bold tm-lh-title tm-title">
              Earn<br />rewards
            </div>
            <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Select one or more validators of the Cosmos Hub and start earning
              crypto assets.
            </div>
          </div>
        </div>
        <div class="card-item">
          <span class="accent"></span>
          <div class="graphics">
            <graphics-staking-3 class="graphics__item" />
          </div>
          <div class="text">
            <div class="title tm-rf3 tm-bold tm-lh-title tm-title">
              Vote for<br />the future
            </div>
            <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Staking ATOM grants the right to vote on proposals and make
              decisions on the future of the network.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="section-rewards tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="span-4">
        <div class="header tm-rf0 tm-medium tm-lh-title tm-overline tm-muted">
          Typical <tm-tooltip term="apy">APY</tm-tooltip>
        </div>
        <div class="percentage tm-rf7 tm-bold tm-lh-title tm-title">9.7%</div>
        <div class="tm-rf1 tm-lh-title">of staked ATOM (annually)*</div>
      </div>
      <div class="span-7">
        <span class="accent"></span>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure tm-title">
          Staking rewards
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
          When the staking transaction is complete, rewards will start to be
          generated immediately. At any time, stakers can send a transaction to
          claim their accumulated rewards, using a wallet.
        </div>
      </div>
    </div>
    <div class="tm-container tm-wrapper section-pie">
      <div class="pie-wrapper tm-wrapper tm-grid-base">
        <div class="pie-item">
          <div
            class="heading tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"
          >
            If you stake
          </div>
          <div class="amount tm-rf4 tm-bold tm-lh-title tm-title">1,000</div>
          <div class="unit tm-rf1 tm-lh-title tm-medium tm-title">ATOM</div>
        </div>
        <div class="pie-item">
          <div class="pie">
            <div class="text">
              <div
                class="title tm-rf0 tm-medium tm-lh-title tm-overline tm-title"
              >
                Your rewards
              </div>
              <div class="num tm-rf5 tm-bold tm-lh-title tm-title">873.26</div>
            </div>
          </div>
        </div>
        <div class="pie-item">
          <div class="percentage tm-rf2 tm-bold tm-lh-title tm-title">
            10.63%
          </div>
          <div
            class="title tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-title"
          >
            Commission
          </div>
          <div class="subtitle tm-rf-1 tm-lh-copy tm-muted">
            (Varies between validators)
          </div>
        </div>
      </div>
      <div class="footnote tm-rf-1 tm-lh-copy tm-measure-narrow tm-muted">
        * baseline inflation rate fluctuates based on the total amount of staked
        ATOM in the network
      </div>
    </div>

    <div
      class="section-rewards-origin tm-section tm-container tm-wrapper tm-grid-base section"
    >
      <div class="graphics">
        <graphics-staking-rewards-origin-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-staking-rewards-origin-light v-else class="graphics__item" />
      </div>
      <div class="text">
        <span class="accent"></span>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure tm-title">
          Where do rewards come from?
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrower">
          Staking rewards are generated and distributed to staked ATOM holders
          in two ways:
        </div>
        <div class="subheading-item">
          <div class="left">
            <span class="crosshair"></span>
          </div>
          <div class="right">
            <div class="title tm-rf2 tm-bold tm-lh-title tm-measure tm-title">
              Transaction fees
            </div>
            <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Transaction fees collected on the Cosmos Hub are distributed to
              staked ATOM holders.
            </div>
          </div>
        </div>
        <div class="subheading-item">
          <div class="left">
            <span class="crosshair"></span>
          </div>
          <div class="right">
            <div class="title tm-rf2 tm-bold tm-lh-title tm-measure tm-title">
              Newly created ATOM
            </div>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              The total supply of ATOM is inflated to reward stakers. ATOM
              holders that do not stake do not receive rewards, meaning their
              ATOM get diluted over time.
            </p>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              The yearly inflation rate of ATOM is available on most explorers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="section-staking-safely tm-section tm-container tm-wrapper tm-grid-base section"
    >
      <div class="text">
        <div class="top">
          <span class="accent"></span>
          <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Staking safely
          </div>
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
          Staking ATOM is not risk-free. If a validator has downtime or
          underperforms, a percentage of ATOM delegated to them may be
          forfeited. To mitigate these risks, it is recommended that ATOM
          holders delegate to multiple validators.
        </div>
        <tm-button
          to-link="internal"
          to="/learn/faq/what-are-the-risks-associated-with-staking"
          size="l"
          variant="text"
          class="btn"
          >More about staking safely
          <span class="icon__right">&rarr;</span></tm-button
        >
      </div>
      <div class="graphics">
        <graphics-staking-safely-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-staking-safely-light v-else class="graphics__item" />
      </div>
    </div>

    <section-banner />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Staking',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.crosshair
  position relative
  display block
  height 1.5rem
  width 1.5rem
  border-left 0.0625rem solid

  &::before,
  &::after
    content ""
    display block
    position relative

  &:before
    width 24px
    border-top 0.0625rem solid
    top 50%
    left -53%

.section
  svg.graphics__item
    height auto

// Hero
.section-hero
  display flex
  flex-direction column
  align-items center

.section-hero .text
  position relative
  z-index 1
  grid-column 1/-1
  text-align center
  center()

  .subtitle
    margin-top var(--spacing-6)

.section-hero .graphics
  position relative
  grid-column 1/-1
  width 100%
  min-width 36rem
  height auto
  center()

// Intro
.section-intro
  grid-column 1/-1

  .subtitle
    margin-top var(--spacing-7)

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column 1/-1
  margin-top var(--spacing-11)

.card-item
  display flex
  flex-direction column
  justify-content space-evenly
  position relative

.card-item .accent
  angle-accent(ne)
  position absolute
  top 0
  right 0

.card-item .graphics
  display flex
  justify-content center

  &__item
    width 115%
    flex 0 0 115%
    max-width 28rem
    margin-bottom -10%

.card-item .title
  margin-bottom var(--spacing-5)

.card-item .subtitle
  margin-bottom var(--spacing-7)

// Rewards
.section-rewards .span-4
  grid-column 1/-1
  align-self self-end

  .percentage
    margin-top var(--spacing-5)
    margin-bottom var(--spacing-5)

.section-rewards .span-7
  grid-column 1/-1
  margin-top var(--spacing-9)
  position relative

  .accent
    angle-accent(ne)
    position absolute
    top 0
    right 0

  .title
    margin-top var(--spacing-7)

  .subtitle
    margin-top var(--spacing-7)

.pie-wrapper
  border-radius $border-radius-5
  box-shadow var(--elevation-4)
  align-items center
  text-align center
  background var(--fg)
  padding-top var(--spacing-7)
  padding-bottom var(--spacing-7)

.pie-item
  text-align left
  grid-column 1/-1

.pie-item + .pie-item
  margin-top var(--spacing-9)

.pie-item
  .amount,
  .unit
    margin-top 1rem

.pie-item .pie .text
  .num
    margin-top var(--spacing-6)

.pie-item
  .title,
  .subtitle
    margin-top 0.25rem

.pie
  width 15rem
  height 15rem
  border-radius: 50%
  background conic-gradient(from 180deg at 50% 50%, #00C2FF -37.79deg, #000000 24.02deg, #FF48F8 24.04deg, #00C2FF 322.21deg, #000000 384.02deg)
  transform matrix(0, 1, 1, 0, 0, 0)
  display grid
  place-items center
  text-align center

  .light-mode &
    background conic-gradient(from 180deg at 50% 50%, #74DEFF -37.79deg, #FFFFFF 24.02deg, #FFCAFD 24.04deg, #74DEFF 322.21deg, #FFFFFF 384.02deg);

  .text
    transform inherit

.footnote
  margin-top var(--spacing-6)

// Rewards origin
.section-rewards-origin .graphics
  grid-column 1/-1
  position relative

  &__item
    width 120%
    margin-top -10%

.section-rewards-origin .accent
  angle-accent(nw)
  margin-bottom var(--spacing-7)

.section-rewards-origin .text
  grid-column 1/-1
  position relative

.section-rewards-origin .text .subtitle
  margin-top var(--spacing-5)

.subheading-item
  margin-top var(--spacing-9)
  position relative
  display flex
  margin-left 0

.subheading-item .right
  margin-left 2rem

.subheading-item .subtitle
  margin-top var(--spacing-3)

// Staking safely
.section-staking-safely .text
  grid-column 1/-1
  position relative
  z-index 1

.section-staking-safely .text .top
  position relative
  width fit-content

.section-staking-safely .text .top .title
  padding-top 2rem
  padding-right 2rem

.section-staking-safely .accent
  angle-accent(ne)
  position absolute
  top 0
  right 0

.section-staking-safely .text .subtitle
  margin-top var(--spacing-7)

.section-staking-safely .text .btn
  margin-top var(--spacing-7)

.section-staking-safely .graphics
  grid-column 1/-1
  display grid
  place-items center
  position relative

  &__item
    width 100%

@media $breakpoint-small
  .pie-item
    center()

@media $breakpoint-medium
  // Hero
  .section-hero .text
    margin-top var(--spacing-10)

  // Intro
  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

  // Rewards
  .section-rewards .span-7
    margin-top 0

  .section-rewards  .span-7 .subtitle
    margin-left var(--spacing-10)

  .pie-wrapper
    max-height unset

  .pie-item + .pie-item
    margin-top 0

  .pie-item

    &:nth-child(1)
      grid-column 1/3

    &:nth-child(2)
      grid-column span 3

    &:nth-child(3)
      grid-column 7/9

  .pie
    width 18rem
    height 18rem

  // Rewards origin
  .section-rewards-origin .text
    grid-column 1/-1
    margin-top var(--spacing-11)

  .section-rewards-origin .accent
    margin-left calc(-1 * var(--grid-gap-x))

  .subheading-item
    margin-left 6.3125rem

  .subheading-item .subtitle
    margin-top var(--spacing-3)

  // Staking safely
  .section-staking-safely .text
    grid-column 1/span 4

  .section-staking-safely .graphics
    grid-column 5/span 4

    &__item
      position absolute
      width 100%

@media $breakpoint-large
  // Intro
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)

  // Rewards origin
  .subheading-item
    margin-left 6.3125rem

@media $breakpoint-xl
  // Hero
  .section-hero .text
    grid-column 7/span 6
    text-align left
    margin-top var(--spacing-10)
    margin-left unset
    margin-right unset

  .section-hero .graphics
    z-index 0
    margin-top -18%
    margin-bottom -10%
    display flex
    justify-content center

  // Intro
  .section-intro
    grid-row 1
    grid-column 2/span 11

  // Rewards
  .section-rewards .span-4
    grid-column 2/span 4
    grid-row 1

  .section-rewards  .span-7
    grid-column 6/span 7
    grid-row 1
    margin-top 0

  .section-rewards  .span-7 .subtitle
    margin-bottom var(--spacing-9)

  .pie-wrapper
    display flex
    max-height 18.625rem

  .section-pie
    padding-bottom var(--spacing-10)

  .pie
    width 23.375rem
    height 23.375rem

  .pie-item
    text-align left

    &:nth-child(1)
      grid-column 2/span 3

    &:nth-child(2)
      grid-column 5/span 4

    &:nth-child(3)
      grid-column 10/span 3

  // Staking safely
  .section-staking-safely .text
    grid-column 2/ span 7
    grid-row 1

  .section-staking-safely .graphics
    grid-column 7/ span 6
    grid-row 1

    &__item
      position absolute
      width 100%
      margin-bottom 5rem

  // Rewards origin
  .section-rewards-origin .graphics
    grid-column 1/ 7
    position relative

    &__item
      position absolute
      width 220%
      margin-top -1%
      margin-left -25%

  .section-rewards-origin .text
    grid-column 7/ span 6
</style>
