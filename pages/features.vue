<template>
  <main>
    <!-- Hero -->
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title">
          A whole universe of opportunity for token holders.
        </h1>
        <div class="split">
          <div class="left">
            <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
              The Cosmos Hub pioneered a new era in the blockchain space by
              being the first public proof-of-stake blockchain built on top of a
              Byzantine Fault Tolerant consensus engine.
            </div>
          </div>
          <div class="right">
            <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
              Yet, this was only the beginning – two years after its launch, the
              Cosmos Hub is set to play a leading role in the Interchain by
              offering a wide array of vital services.
            </div>
          </div>
        </div>
      </div>
      <div class="hero-graphics">
        <graphics-features-hero class="graphics" />
      </div>
    </div>

    <!-- Features -->
    <div class="tm-container tm-wrapper tm-grid-base section-features">
      <div class="text">
        <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
          Explore a rapidly growing set of interchain features.
        </h2>
      </div>
      <div class="tiles tm-grid-base">
        <div class="span-7">
          <div class="row-1">
            <div class="graphics">
              <graphics-features-staking-dark
                v-if="$nuxt.$colorMode.value === 'dark'"
                class="graphics__item"
              />
              <graphics-features-staking-light v-else class="graphics__item" />
            </div>
            <div class="feature-text">
              <div class="caption tm-rf0 tm-lh-title">
                Capital Formation · Live
              </div>
              <h3 class="title">
                <nuxt-link
                  to="/learn/staking"
                  class="tm-link tm-link-disclosure tm-rf3 tm-bold tm-lh-title"
                >
                  Staking
                </nuxt-link>
              </h3>
              <div class="desc tm-rf0 tm-lh-copy tm-measure-narrow">
                Built on top of the
                <tm-link href="https://tendermint.com/core" class="tm-bold"
                  >Tendermint BFT consensus engine</tm-link
                >, the Hub’s staking module is one of the most efficient
                proof-of-stake implementations in the world. It enables ATOM
                token holders to secure the chain by locking their ATOM, in
                exchange for transaction fees.
              </div>
            </div>
          </div>
          <div class="row-2">
            <div class="graphics">
              <graphics-features-voting-dark
                v-if="$nuxt.$colorMode.value === 'dark'"
                class="graphics__item"
              />
              <graphics-features-voting-light v-else class="graphics__item" />
            </div>
            <div class="feature-text">
              <div class="caption tm-rf0 tm-lh-title">Governance · Live</div>
              <h3 class="title">
                <nuxt-link
                  to="/learn/faq/what-is-governance"
                  class="tm-link tm-link-disclosure tm-rf3 tm-bold tm-lh-title"
                >
                  Voting
                </nuxt-link>
              </h3>
              <div class="desc tm-rf0 tm-lh-copy tm-measure-narrow">
                Staking ATOM gives rights to participate in the open governance
                process, which governs the evolution of the network.
              </div>
            </div>
          </div>
        </div>
        <div class="span-4 feature-text">
          <div class="top">
            <span class="ne-accent"></span>
            <div class="caption tm-rf0 tm-lh-title">Account System · 2021</div>
          </div>
          <div class="mid">
            <tm-link
              href="https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11"
              class="tm-link-external tm-rf3 tm-bold tm-lh-title"
              >Interchain Accounts</tm-link
            >
            <div
              class="desc tm-rf0 tm-lh-copy tm-measure tm-measure-narrow-l-up"
            >
              Interchain Accounts are the accounts of the IBC-enabled world.
              Essentially, they allow blockchains to securely control accounts
              on other chains over IBC. With this feature, users will be able to
              access the entire Interchain through their single Cosmos Hub
              account. One account, for all the chains.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/chainapsis.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/interchain-gmbh.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              <tm-link href="https://chainapsis.com">Chainapsis</tm-link>,
              <tm-link href="https://interchain.berlin"
                >Interchain GmbH</tm-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DEX -->
    <div class="tm-container tm-wrapper section-dex section-feature">
      <div class="tm-grid-base">
        <span class="ne-accent ne-accent-stacked"></span>
        <span class="horizontal-line"></span>
        <figure class="graphics">
          <div class="graphics__item">
            <graphics-coin-stack />
          </div>
        </figure>
        <div class="feature-text">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Capital Formation · Q2 2021
            </div>
          </div>
          <div class="mid">
            <div class="title">
              <tm-link
                href="https://github.com/tendermint/liquidity#liquidity-module"
                class="tm-link-external tm-rf3 tm-bold tm-lh-title"
                >Gravity DEX</tm-link
              >
            </div>
            <div class="desc tm-rf0 tm-lh-copy tm-measure">
              The Cosmos Hub’s Gravity DEX will enable users to seamlessly swap
              digital assets coming from all over the interchain. This service
              improves on existing designs by combining AMM features (like that
              of Uniswap) with an orderbook-based model, providing a richer and
              more efficient trading experience.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/b-harvest.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/tendermint.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              <tm-link href="https://bharvest.io">B-Harvest</tm-link>,
              <tm-link href="https://tendermint.com">Tendermint</tm-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gravity bridge -->
    <div
      id="gravity-bridge"
      class="tm-container tm-wrapper section-gravity-bridge section-feature"
    >
      <div class="tm-grid-base">
        <span class="ne-accent ne-accent-stacked"></span>
        <div class="graphics">
          <!-- GRAPHICS -->
          <graphics-features-gravity-bridge class="graphics__item" />
        </div>
        <div class="feature-text">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Capital Formation · 2021
            </div>
          </div>
          <div class="mid">
            <h3 class="title">
              <tm-link
                href="https://blog.althea.net/gravity-bridge"
                class="tm-link-external tm-rf3 tm-bold tm-lh-title"
              >
                Gravity Bridge
              </tm-link>
            </h3>
            <div class="desc tm-rf0 tm-lh-copy tm-measure">
              Backed by billions of dollars of ATOM staked on the Cosmos Hub,
              the Gravity Bridge will be the most secure, efficient, and
              decentralized cross chain bridge to Ethereum. It will enable
              Cosmos assets to flow into the Ethereum ecosystem as ERC-20 tokens
              and, conversely, native ERC-20 tokens to flow in the Cosmos
              ecosystem.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/althea.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              <tm-link href="https://althea.net">Althea</tm-link>,
              <tm-link href="https://interchain.io"
                >Interchain Foundation</tm-link
              >
            </div>
          </div>
          <span class="horizontal-line"></span>
        </div>
      </div>
    </div>

    <!-- Interchain staking -->
    <div
      class="tm-container tm-wrapper section-interchain-staking section-feature"
    >
      <div class="tm-grid-base">
        <span class="ne-accent ne-accent-stacked"></span>
        <div class="graphics">
          <graphics-features-interchain-staking class="graphics__item" />
        </div>
        <div class="feature-text">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Shared Security · Late 2021
            </div>
          </div>
          <div class="mid">
            <h3 class="title">
              <tm-link
                href="https://github.com/informalsystems/cross-chain-validation/blob/2b7e5ddebd10c9eea743989ca3fbcba990db4987/spec/valset-update-protocol.md"
                class="tm-link-external tm-rf3 tm-bold tm-lh-title"
                >Interchain Staking</tm-link
              >
            </h3>
            <div class="desc tm-rf0 tm-lh-copy tm-measure">
              Staked ATOM will be able to secure more than just the Cosmos Hub.
              In practice, validators will be able to validate chains that
              request it (called child-chains) on an opt-in basis, with their
              ATOM delegation as collateral. In exchange for securing
              child-chains, ATOM stakers will be rewarded with additional
              rewards. The more child-chains, the more rewards!
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/informal.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/tendermint.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              <tm-link href="https://informal.systems">Informal Systems</tm-link
              >,
              <tm-link href="https://interchain.io"
                >Interchain Foundation</tm-link
              >,
              <tm-link href="http://tendermint.com">Tendermint</tm-link>
            </div>
          </div>
        </div>
        <span class="horizontal-line"></span>
      </div>
    </div>

    <!-- CNS + Staking Derivatives -->
    <div class="tm-container tm-wrapper tm-section section-features-last">
      <div class="tm-grid-base">
        <span class="ne-accent ne-accent-stacked"></span>
        <div class="left feature-text section-feature">
          <span class="horizontal-line"></span>
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Service Discovery · 2021
            </div>
          </div>
          <div class="mid">
            <h3 class="title">
              <tm-link
                href="https://github.com/tendermint/cns"
                class="tm-link-external tm-rf3 tm-bold tm-lh-title"
                >Chain Name Service</tm-link
              >
            </h3>
            <div class="desc tm-rf0 tm-lh-copy tm-measure">
              Just like websites have domain names, blockchains will have chain
              names. These chain names will be managed on the Cosmos Hub, which
              will operate a Chain Name Service. They will make it much easier
              for users of the Interchain to identify the chain(s) they want to
              interact with.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/tendermint.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              <tm-link href="http://tendermint.com">Tendermint</tm-link>,
              <tm-link href="https://interchain.io"
                >Interchain Foundation</tm-link
              >
            </div>
          </div>
          <span class="se-accent se-accent-stacked"></span>
        </div>
        <div class="right feature-text section-feature">
          <span class="sw-accent sw-accent-stacked"></span>
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Capital Formation · 2022
            </div>
          </div>
          <div class="mid">
            <h3 class="title">
              <tm-link
                href="https://github.com/ChorusOne/liquid-staking"
                class="tm-link-external tm-rf3 tm-bold tm-lh-title"
                >Staking Derivatives</tm-link
              >
            </h3>
            <div class="desc tm-rf0 tm-lh-copy tm-measure">
              Staking Derivatives will be an important primitive in the
              cross-chain Defi space. At their core, staking derivatives are
              claims against staked ATOM. Just like staked ATOM, staking
              derivatives accrue staking rewards - but unlike staked ATOM,
              staking derivatives are liquid, meaning they can be transferred.
              Since they represent staked ATOM, staking derivatives are at risk
              of being partially burnt if the underlying ATOM get slashed.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/chorus-one.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              <tm-link href="https://chorus.one">Chorus One</tm-link>,
              <tm-link href="https://interchain.io"
                >Interchain Foundation</tm-link
              >
            </div>
          </div>
          <span class="se-accent"></span>
        </div>
      </div>
    </div>

    <!-- Fees -->
    <div class="tm-section tm-container section-fees">
      <div class="graphics">
        <graphics-features-rewards-fees class="graphics__item" />
      </div>
      <div class="tm-wrapper tm-grid-base">
        <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
          Services generate fees. Fees generate rewards.
        </div>
        <div class="description">
          <div class="subtitle tm-rf1 tm-lh-copy">
            The more activity on the Hub, the more fees paid by services, which
            in turn, generates rewards for staked ATOM holders.
          </div>
          <tm-button
            to-link="internal"
            to="/learn/faq/what-is-staking"
            size="l"
            variant="text"
            class="btn"
            >What is staking <span class="icon__right">&rarr;</span></tm-button
          >
        </div>
      </div>
    </div>

    <div class="tm-wrapper tm-container tm-section">
      <tm-crosshair class="center crosshair" />
      <tm-cta-cards :data="cards" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          href: '/learn/get-atom',
          graphics: 'graphics-cta-token-holders',
          overline: 'Token Holders',
          title: 'Start staking ->',
        },
        {
          href: '/starport',
          graphics: 'graphics-cta-developers',
          overline: 'Developers',
          title: 'Start building ->',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Features',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.ne-accent
  angle-accent(ne)
  position absolute
  top 0
  right 0

  &-stacked:before
    content ""
    angle-accent(se)
    position absolute
    bottom 100%
    right -$px

.sw-accent
  angle-accent(sw)
  position absolute
  bottom 0
  left calc(-1 * var(--grid-gap-x))

  &-stacked:before
    content ""
    angle-accent(se)
    position absolute
    right 100%
    bottom -$px

.se-accent
  angle-accent(se)
  position absolute
  bottom 0
  right 0

  &-stacked:before
    content ""
    angle-accent(ne)
    position absolute
    top 100%
    right -$px

.horizontal-line
  display block
  width var(--spacing-6)
  border-bottom 0.0625rem solid
  position absolute
  bottom 0
  left 0

.section-feature
  margin-top var(--spacing-9)

  .tm-grid-base
    position relative

  svg.graphics__item
    height auto

.bottom
  display block
  align-items center
  margin-top var(--spacing-9)

  .footnote
    margin-top var(--spacing-5)
    z-index 1

.caption
  color var(--white-500)

  .light-mode &
    color var(--trans-gray-600)

.desc
  color var(--white-800)

  .light-mode &
    color var(--trans-gray-200)

.feature-text
  padding-top var(--spacing-8)
  padding-bottom var(--spacing-8)

.feature-text .mid,
.feature-text .bottom
  margin-top var(--spacing-9)

.feature-text .desc
  margin-top var(--spacing-5)

.avatar-list
  display flex

.overlap
  margin-right -8px

.center
  display grid
  place-items center
  center()
  width 100% // safari

.crosshair
  margin-bottom 7rem

.avatar-item
  background-color transparent
  box-shadow transparent 0px 0px 0px 4px
  display flex
  justify-content center
  align-items center
  height 2rem
  width 2rem

// Hero
.section-hero .tm-section
  padding-bottom 0

.section-hero .title
  max-width 12em

.section-hero .title,
.section-hero .split
  grid-column span 4

.section-hero .split,
.section-hero .split .right
  margin-top var(--spacing-9)

.section-hero .split .right .subtitle
  margin-bottom var(--spacing-6)

.section-hero .split .subtitle
  color var(--white-800)

  .light-mode &
    color var(--black)

// Graphics
.hero-graphics
  position relative
  padding-top var(--spacing-12)
  overflow visible

// Feature
.section-features .text,
.section-features .graphics,
.section-features .span-7,
.section-features .span-4
  grid-column 1/-1

.section-features .graphics
  display grid
  place-items center

  &__item
    width auto

.section-features .tiles
  grid-column 1/-1
  position relative
  margin-top var(--spacing-10)

.section-features .span-4
  display flex
  flex-direction column
  justify-content space-between
  position relative
  margin-top var(--spacing-10)

.section-features .span-7 .desc
  color var(--white-800)

  .light-mode &
    color var(--trans-gray-200)

.section-features .span-7
  .row-1,
  .row-2
    border-radius $border-radius-5
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)
    background var(--gray-100)

    .light-mode &
      background linear-gradient(0deg, #FFFFFF, #FFFFFF)

  .title
    margin-top var(--spacing-6)

  .caption
    margin-top var(--spacing-7)
    color var(--white-500)

    .light-mode &
        color var(--trans-gray-600)

.section-features .span-7 .row-2
  margin-top var(--spacing-7)

// DEX
.section-dex .graphics
  grid-column 1/-1
  padding-top var(--spacing-7)
  display flex
  align-items center
  justify-content center

  &__item
    margin-left 30%
    flex 0 0 100%
    max-width 28rem

  .coins
    transform rotateY(180deg)

.section-dex .feature-text
  grid-column 1/-1
  display flex
  flex-direction column
  justify-content space-between
  position relative

  .bottom
    margin-top var(--spacing-9)

// Gravity bridge
.section-gravity-bridge .feature-text
  grid-column 1/-1
  display flex
  flex-direction column
  justify-content space-between
  position relative

.section-gravity-bridge .graphics
  grid-column 1/-1
  padding-top var(--spacing-7)
  display flex
  align-items flex-end
  justify-content center

  &__item
    flex 0 0 108%
    margin-top -10%
    min-width 30rem

// Interchain staking
.section-interchain-staking .feature-text
  grid-column 1/-1
  display flex
  flex-direction column
  justify-content space-between
  position relative

.section-interchain-staking .graphics
  grid-column 1/-1
  display flex
  align-items center
  justify-content center
  max-height 28rem

  &__item
    flex 0 0 150%
    max-width 61rem
    margin-top -13%
    margin-bottom -30%

// CNS + Staking Derivatives
.section-features-last
  padding-top 0

  .tm-grid-base
    display grid
    grid-template-columns auto
    gap 0 var(--spacing-7)
    position relative

.section-features-last .left,
.section-features-last .right
  display flex
  flex-direction column
  justify-content space-between
  position relative

// Fees
.section-fees
  .title,
  .description,
  .graphics
    grid-column 1/-1

.section-fees .graphics__item
  width 100%
  height 100%

.section-fees .description .subtitle
  margin-top var(--spacing-8)

.section-fees .description .btn
  margin-top var(--spacing-6)

@media $breakpoint-small
  // Fees
  .section-fees .graphics
    margin-bottom -20%

@media $breakpoint-medium-max
  .section-features .span-7
    .row-1 .graphics__item
      margin-top -5.5rem
      margin-bottom -5rem
    .row-2 .graphics__item
      margin-top -9.5rem
      margin-bottom -11rem

  // CNS + Staking Derivatives
  .section-features-last
    .sw-accent
      display none

@media $breakpoint-medium
  .bottom
    display grid
    grid-template-columns auto 1fr
    gap 1rem

    .footnote
      margin-top 0

  // Hero
  .section-hero .title,
  .section-hero .split
    grid-column 1/span 8

  .section-hero .split
    display grid
    grid-template-columns auto auto
    gap var(--spacing-7)
    z-index 1

  .section-hero .split .left,
  .section-hero .split .right
    grid-column unset
    margin-top 0

  // Feature
  .section-features .graphics
    grid-column span 2
    display flex
    align-items center
    position relative
    z-index 0

    &__item
      position absolute
      left -8rem

  .section-features .feature-text
    grid-column span 8

  .section-features .span-7
    .row-1,
    .row-2
      display grid
      grid-auto-flow column
      grid-template-columns 10rem auto

      .caption
        margin-top 0

  // DEX
  .section-dex .graphics
    grid-column 1/ 5

  .section-dex .feature-text
    grid-column 5/9
    padding-left 0

  // Gravity bridge
  .section-gravity-bridge .feature-text
    grid-column 1/5
    grid-row 1
    position relative

  .section-gravity-bridge .graphics
    grid-column 5/9

  // Interchain staking
  .section-interchain-staking .feature-text
    grid-column 5/9

  .section-interchain-staking .graphics
    grid-column 1/5
    &__item
      margin-left -13%

  // CNS + Staking Derivatives
  .section-features-last
    .tm-grid-base
      grid-template-columns auto auto

    .left .mid,
    .right .mid
      margin-bottom auto

    .left .se-accent
      display none

  // Fees

@media $breakpoint-xl
  // Hero
  .section-hero .title,
  .section-hero .split
    grid-column 2/span 10

  // Features
  .section-features .text
    grid-column 6/span 7

  // DEX
  .section-dex .graphics
    grid-column 1/span 6

  .section-dex .feature-text
    grid-column 7/ 13

  // Gravity bridge
  .section-gravity-bridge .feature-text
    grid-column 1 / span 6

  .section-gravity-bridge .graphics
    grid-column 7 / 13

  // Feature
  .section-features .tiles
    grid-column span 12
    position relative
    margin-top var(--spacing-10)

  .section-features .tiles .span-7
    grid-column 1/8

  .section-features .tiles .span-4
    grid-column 9/13
    margin-top 0
    padding-right var(--spacing-7)

  .section-features .feature-text
    grid-column 3/span 10

  .section-features .graphics__item
    left -10rem

  // Interchain staking
  .section-interchain-staking .feature-text
    grid-column 7 /span 6

  .section-interchain-staking .graphics
    grid-column 1 / span 6

  // Fees
  .section-fees .graphics
    position absolute
    left -48%
    top -20%
    z-index 0
    width 105%

  .section-fees .title
    grid-column 5/ span 8

  .section-fees .description
    grid-column 6/ span 5
</style>
