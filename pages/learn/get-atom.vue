<template>
  <main>
    <div class="section-hero section-first tm-section">
      <div class="tm-wrapper tm-container tm-section tm-grid-base">
        <logo-cosmos-brandmark class="graphics-brandmark" />
        <graphics-get-started-hero-validator class="graphics-validator" />
        <div class="text tm-measure-wide">
          <div class="header tm-rf0 tm-lh-title tm-medium tm-overline tm-muted">
            Get Started
          </div>
          <div class="title tm-rf6 tm-bold tm-lh-title tm-title">
            Get ATOM and stake.
          </div>
        </div>
        <graphics-get-started-hero-coins class="graphics-coins" />
      </div>
      <graphics-get-started-hero-stars class="graphics-stars-hero" />
    </div>

    <div class="tm-wrapper tm-container">
      <div class="tm-section tm-grid-base">
        <div class="section-intro">
          <div class="title tm-rf3 tm-bold tm-lh-title">Before you begin</div>
        </div>
        <div class="cards-wrapper">
          <nuxt-link to="/learn/faq/what-is-the-atom" class="card-item">
            <div
              class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted"
            >
              Learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
              What is the ATOM token?
            </div>
          </nuxt-link>
          <nuxt-link to="/learn/faq/what-is-staking" class="card-item">
            <div
              class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted"
            >
              Learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
              What is staking?
            </div>
          </nuxt-link>
          <nuxt-link to="/learn/faq/what-is-a-wallet" class="card-item">
            <div
              class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted"
            >
              Learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
              What is a wallet?
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="section-step top-gap">
        <div class="section-step-1 tm-grid-base section">
          <div
            class="step step-1 tm-rf1 tm-medium tm-lh-title tm-overline tm-title"
          >
            Step 01
          </div>
          <div class="top">
            <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
              Get ATOM using one of the many cryptocurrency exchanges.
              <small class="tm-rf0 tm-rf1-m-up tm-line-height-title tm-normal"
                >†</small
              >
            </div>
          </div>
          <div class="graphics">
            <graphics-coin-stack class="graphics__item" />
          </div>
          <div class="bottom">
            <p class="subtitle tm-rf1 tm-lh-copy tm-measure">
              Some exchanges offer staking services directly, but this requires
              you to delegate ownership of your tokens to them.
            </p>
            <p class="subtitle tm-rf1 tm-lh-copy tm-measure">
              This guide involves using your own wallet, enabling you to
              maintain full ownership of your tokens.
            </p>
            <tm-button
              to-link="external"
              href="https://messari.io/asset/cosmos/exchanges"
              size="l"
              variant="text"
              class="btn"
              >Browse exchanges
              <span class="icon__right">&#8599;</span></tm-button
            >
          </div>
        </div>
      </div>
      <div class="transition">
        <svg
          v-if="$nuxt.$colorMode.value === 'dark'"
          width="164"
          height="241"
          viewBox="0 0 164 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.6217 239.843C94.1553 226.029 123.171 206.528 141.312 183.593C159.454 160.658 165.981 135.227 160.138 110.241C154.295 85.2541 136.322 61.7326 108.296 42.3963C80.2706 23.0599 43.3373 8.69857 1.76725 0.972885"
            stroke="url(#paint0_linear-200014)"
            stroke-width="1.77663"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear-200014"
              x1="67.499"
              y1="-62.0005"
              x2="16.9728"
              y2="235.195"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.254598" stop-color="white" stop-opacity="0" />
              <stop offset="0.901042" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          v-else
          width="164"
          height="241"
          viewBox="0 0 164 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.6217 239.843C94.1553 226.029 123.171 206.528 141.312 183.593C159.454 160.658 165.981 135.227 160.138 110.241C154.295 85.2541 136.322 61.7326 108.296 42.3963C80.2706 23.0599 43.3373 8.69857 1.76725 0.972885"
            stroke="url(#paint0_linear-166099)"
            stroke-width="1.77663"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear-166099"
              x1="67.499"
              y1="-62.0005"
              x2="16.9728"
              y2="235.195"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.254598" stop-opacity="0" />
              <stop offset="0.901042" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="section-step tm-grid-base">
        <div
          class="step step-2 tm-rf1 tm-medium tm-lh-title tm-overline tm-title"
        >
          Step 02
        </div>
        <div class="left section-step-2 section">
          <div class="graphics">
            <graphics-navigator-gem class="graphics__item" />
          </div>
          <div class="title tm-rf5 tm-bold tm-lh-title tm-measure tm-title">
            Transfer your ATOM to a wallet.
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            Choose a wallet that suits your needs, create an account, and
            transfer your ATOM from the exchange.
          </div>
          <tm-button
            to-link="internal"
            to="/ecosystem/wallets"
            size="l"
            variant="text"
            class="btn"
            >Choose a wallet <span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div
          class="step step-3 tm-rf1 tm-medium tm-lh-title tm-overline tm-title"
        >
          Step 03
        </div>
        <div class="right section-step-3 section">
          <div class="graphics">
            <graphics-get-started-step-3 class="graphics__item" />
          </div>
          <div class="title tm-rf5 tm-bold tm-lh-title tm-measure tm-title">
            Select your validators.
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            In your wallet, choose the
            <tm-tooltip term="validators">validators</tm-tooltip>
            to delegate your ATOM to. Remember to spread your risk by delegating
            your ATOM to multiple validators in good standing.
          </div>
          <tm-button
            to-link="internal"
            to="/learn/faq/selecting-validators"
            size="l"
            variant="text"
            class="btn"
            >Choosing a validator
            <span class="icon__right">&rarr;</span></tm-button
          >
        </div>
      </div>
      <div class="transition">
        <svg
          v-if="$nuxt.$colorMode.value === 'dark'"
          width="368"
          height="368"
          viewBox="0 0 368 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M366 2C318.199 2 270.866 11.4151 226.703 29.7079C182.541 48.0006 142.414 74.8126 108.613 108.613C74.8126 142.414 48.0005 182.541 29.7078 226.703C11.4151 270.866 1.99999 318.199 2 366"
            stroke="url(#paint0_linear-032779)"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear-032779"
              x1="598"
              y1="-15"
              x2="1.99998"
              y2="366"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00763763" stop-color="white" stop-opacity="0" />
              <stop offset="0.57166" stop-color="white" stop-opacity="0.03" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          v-else
          width="368"
          height="368"
          viewBox="0 0 368 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M366 2C318.199 2 270.866 11.4151 226.703 29.7079C182.541 48.0006 142.414 74.8126 108.613 108.613C74.8126 142.414 48.0005 182.541 29.7078 226.703C11.4151 270.866 1.99999 318.199 2 366"
            stroke="url(#paint0_linear-684431)"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear-684431"
              x1="373"
              y1="-35"
              x2="1.99995"
              y2="366"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00763763" stop-opacity="0" />
              <stop offset="0.57166" stop-opacity="0.03" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="section-step bottom-gap tm-grid-base section-step-4 section">
        <div
          class="step step-4 tm-rf1 tm-medium tm-lh-title tm-overline tm-title"
        >
          Step 04
        </div>
        <div class="graphics">
          <graphics-get-started-lock-atoms class="graphics__item" />
        </div>
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Lock up and stake<br />your ATOM.
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            Using your wallet, send a simple transaction (often called “Stake”
            or “Delegate”) to start staking. This locks up your ATOM (i.e. you
            can't transfer them) and enables the chosen validators to operate
            the network.
          </div>
          <div class="warning-wrapper">
            <div class="icon">
              <icon-warning />
            </div>
            <div class="text">
              Staked ATOM can be unlocked via your wallet by sending a
              transaction (often called “Unstake” or “Undelegate”) and waiting
              21 days.
            </div>
          </div>
        </div>
      </div>
      <div class="tm-section tm-grid-base section-graphics">
        <div class="section-community section">
          <div class="text">
            <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
              Welcome to the community, fellow Cosmonaut.
            </div>
            <div class="subtitle tm-rf1 tm-lh-copy tm-measure-wide">
              Now that you’ve staked your ATOM like a pro, join a fast-growing
              community of developers and innovators connected all over the
              world, building the new era of the internet.
            </div>
            <div class="grid-wrapper">
              <tm-link
                v-for="item in links"
                :key="item.logo"
                :href="item.url"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div class="grid-item">
                  <div class="icon">
                    <component :is="`icon-${item.logo}`" />
                  </div>
                  <div class="details">
                    <div class="title tm-rf1 tm-bold tm-lh-title">
                      {{ item.title }}
                    </div>
                    <div
                      class="desc tm-rf-1 tm-rf0-m-up tm-lh-copy tm-muted tm-measure-narrow"
                    >
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
              </tm-link>
            </div>
            <div class="footer">
              <tm-button
                to-link="external"
                href="https://v1.cosmos.network/community"
                size="l"
                variant="text"
                class="btn"
                >Cosmos Community
                <span class="icon__right">&rarr;</span></tm-button
              >
            </div>
          </div>
        </div>
        <graphics-get-started-hero-stars class="stars-graphics" />
      </div>
    </div>
  </main>
</template>

<script>
import LogoCosmosBrandmark from '../../components/logos/LogoCosmosBrandmark.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'
import IconWarning from '~/components/icons/IconWarning.vue'

export default {
  components: {
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
    IconWarning,
    LogoCosmosBrandmark,
  },
  data() {
    return {
      links: [
        {
          url: 'https://t.me/cosmosproject',
          logo: 'telegram',
          title: 'Community Chat',
          desc:
            'Ask general questions and chat with the worldwide community on Telegram.',
        },
        {
          url: 'https://twitter.com/cosmos',
          logo: 'twitter',
          title: 'Twitter',
          desc:
            'Follow @cosmos to get the latest news and updates from across the ecosystem.',
        },
        {
          url: 'https://discord.gg/vcExX9T',
          logo: 'discord',
          title: 'Developer Chat',
          desc:
            'Have technical questions about Cosmos tools? Ask a developer on the Community Discord.',
        },
        {
          url: 'https://forum.cosmos.network',
          logo: 'cosmos',
          title: 'Cosmos Forum',
          desc:
            'Thinking about becoming a validator or interested in network matters? Join the discussion.',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Get Started',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.transition
  display grid
  place-items center

// Hero
.section-hero
  text-align left

.section-hero .text
  grid-column 1/-1
  grid-row 1

.section-hero .title
  margin-top var(--spacing-6)

.graphics-brandmark
  display none

.graphics-validator
  grid-row 2
  width auto
  display none

.graphics-coins
  grid-row 2

.graphics-stars-hero
  position absolute
  right 0
  top 0
  z-index 0
  width 65%

// TODO: add section class
.section
  svg.graphics__item
    height auto

// Intro
.section-intro
  grid-column 1/-1

.cards-wrapper
  grid-row 2
  display grid
  // grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column 1/-1
  margin-top var(--spacing-8)

.card-item
  padding var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  background-color var(--fg)

.card-item .title
  margin-top var(--spacing-3)

.section-step
  position relative

// Step
.step
  margin-bottom var(--spacing-5)
  position relative

.step-1
.step-2
.step-3
.step-4
  grid-column 1/-1

// Step 1
.section-step-1
  position relative

.top-gap
  padding-top var(--spacing-10)

.bottom-gap
  padding-bottom var(--spacing-10)

.section-step-1
  .top,
  .graphics,
  .bottom
    grid-column 1/-1

.section-step-1 .graphics
  display flex
  flex-direction column
  justify-content center
  align-items flex-end

  &__item
    width 100%
    margin-right -12%

  .coins
    transform rotateY(180deg)

.section-step-1 .bottom
  display flex
  flex-direction column
  justify-content center
  align-items flex-start

.section-step-1 .graphics,
.section-step-1 .bottom
  margin-top var(--spacing-7)

.section-step-1 .btn
  margin-top var(--spacing-6)

// Step 2
.section-step-2 .subtitle
  margin-top var(--spacing-7)

.section-step-2 .btn
  margin-top var(--spacing-6)

.section-step-2 .graphics__item
  width 100%
  margin-top -18%
  margin-bottom -48%
  z-index 1
  position relative

// Step 3
.left,
.right
  grid-column 1/-1
  position relative

.step-3
  margin-top var(--spacing-9)

.section-step-3 .graphics__item
  width 100%
  z-index 1
  position relative
  margin-bottom -2rem

.section-step-3 .subtitle
  margin-top var(--spacing-7)

.section-step-3 .btn
  margin-top var(--spacing-6)

// Step 4
.section-step-4 .graphics
.section-step-4 .text
  grid-column 1/-1

.section-step-4 .graphics
  display grid
  place-items flex-end

  &__item
    width 100%
    margin-bottom 10%

.section-step-4 .text .subtitle
  margin-top var(--spacing-7)

.section-step-4 .text .warning-wrapper
  margin-top var(--spacing-8)
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  gap var(--spacing-5)
  align-items center
  border-radius $border-radius-5
  box-shadow var(--elevation-4)
  padding var(--spacing-6)
  background-color var(--gray-100)
  max-width 26.9375rem

  .light-mode &
    background-color var(--white)

.warning-wrapper .icon
  grid-column-start 1
  width var(--spacing-9)
  height var(--spacing-9)
  display flex
  align-items center
  justify-content center

.warning-wrapper .text
  grid-column-start 2
  color var(--white-800)

  .light-mode &
    color rgba(0, 0, 0, 0.5)

// Community
.section-community
  grid-column 1/-1

.section-community .graphics__item
  width 100%

.section-community .title
  max-width 13em

.section-community .subtitle
  margin-top var(--spacing-6)

.section-community .btn
  margin-top var(--spacing-9)

.grid-wrapper
  display grid
  grid-template-columns repeat(auto-fit, minmax(24rem, 1fr))
  grid-gap 0 var(--grid-gap-x)
  row-gap var(--spacing-9)
  margin-top var(--spacing-9)

.grid-item
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  gap var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-2px)

.details .desc
  margin-top var(--spacing-3)

.section-graphics
  position relative

.stars-graphics
  position absolute
  right 0
  top 0
  z-index 0
  width 38%
  height auto
  overflow visible

@media $breakpoint-medium
  .step-1,
  .step-2,
  .step-3,
  .step-4
    grid-column 1/-1

    &:before
      content ""
      position absolute
      left -56px
      bottom 15px
      width 40px
      height 1px
      background var(--white)

      .light-mode &
        background var(--black)

  // Intro
  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

  // Step 2, 3
  .left,
  .right
    grid-column 1/-1

  .right
    margin-top 8.4375rem

  .step-3
    margin-top var(--spacing-10)

@media $breakpoint-large
  // Intro
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)

@media $breakpoint-xl
  // Global
  .step
    transform rotate(-90deg)
    position absolute
    top 4%
    left -2%

  // Hero
  .graphics-brandmark
    grid-row 1
    grid-column 3/span 1
    position absolute
    right 0
    display inherit

  .graphics-validator
    grid-row 1
    grid-column 1
    margin-top 2.4375rem
    transform translate(30px, 60px)
    display inherit

  .section-hero .text
    grid-column 4/span 7
    grid-row 1

  .graphics-coins
    grid-column 9/span 2
    grid-row 1

  // Intro
  .section-intro
    grid-column 4/span 9

  // Step 1
  .section-step-1 .top
    grid-column 5/span 8
    grid-row 1

  .section-step-1 .graphics
    grid-column 1/span 6
    grid-row 1/3

  .section-step-1 .bottom
    grid-column 7/span 6

  // Step 2, 3
  .left
    grid-column 2/span 5

  .step-2
    grid-column 1

  .section-step-2 .graphics__item
    margin-top -8rem
    margin-bottom -50%

  .right
    grid-column 8/span 5
    margin-top 16.75rem

  .step-3
    grid-column 7
    margin-top 16.75rem

  .section-step-3 .graphics__item
    margin-top -8rem
    margin-bottom -4rem

  // Step 4
  .section-step-4
    grid-column 1/-1

  .step-4
    grid-column 1

  .section-step-4 .graphics
    grid-column 2/span 5

    &__item
      margin-bottom 0

  .section-step-4 .text
    grid-column 7/span 6
    display flex
    flex-direction column
    justify-content space-between

  .section-step-4 .text .warning-wrapper
    gap 0

  // Community
  .section-community
    grid-column 1/span 10
</style>
