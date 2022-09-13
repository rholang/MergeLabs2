<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text">
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"
          >
            Ecosystem
          </div>
          <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title">
            Cosmos Market Capitalization
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
            Cosmos secures
            <strong>{{ marketcap }} billion USD</strong> in digital assets
            across {{ tokens.length }} apps and services.
          </p>
          <div class="btn-group">
            <tm-button
              to-link="internal"
              to="/ecosystem/tokens"
              size="m"
              class="btn"
              >Tokens
            </tm-button>
            <tm-button
              to-link="internal"
              to="/ecosystem/apps"
              size="m"
              class="btn"
              variant="text"
              >Apps &amp; Services
            </tm-button>
            <tm-button
              to-link="internal"
              to="/ecosystem/wallets"
              size="m"
              variant="text"
              class="btn"
              >Wallets
            </tm-button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-tokens tm-wrapper tm-container tm-section">
      <div class="card-token-heading">
        <div class="token-rank align-right">Rank</div>
        <div class="token-name">Name</div>
        <div class="token-symbol align-right">Symbol</div>
        <div class="token-price align-right">Price</div>
        <div class="token-change align-right">24h Δ</div>
        <div class="marketcap align-right">Market Cap</div>
        <div class="token-link"></div>
      </div>
      <CardToken v-for="token in tokens" :key="token.id" :token="token" />
    </div>
    <div class="tm-wrapper tm-container tm-section">
      <tm-crosshair class="center crosshair" />
      <tm-cta-cards :data="cards" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import CardToken from '~/components/ecosystem/CardToken.vue'

export default {
  components: {
    CardToken,
  },
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
  computed: {
    ...mapGetters(['apps', 'tokens', 'marketcap']),
  },
  mounted() {
    this.$store.commit('initApps')
    this.$store.commit('initTokens')
  },
  head() {
    return {
      title: 'Market Capitalization - Ecosystem',
    }
  },
}
</script>

<style lang="stylus" scoped>

// Global
.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--spacing-7)

.grid-col-2
  display grid

.center
  display grid
  place-items center
  center()
  width 100% // safari

.crosshair
  margin-bottom 7rem

// Hero
.section-hero
  text-align center

.section-hero
  .text
  .demo
    grid-column 1/-1
    position relative
    z-index 1

.section-hero .overline
  color var(--white-500)

.section-hero .title
  margin-top var(--spacing-5)

.section-hero .subtitle
  margin-top var(--spacing-7)
  center()

.card-token-heading
  display grid
  grid-template-columns 6fr 3fr

  text-transform uppercase
  line-height 5rem

.align-right
  text-align right

.card-token-heading,
.token-rank, .token-symbol, .token-price, .token-change, .token-link
  display none

.token-name
  padding-left 4.5rem

@media $breakpoint-small
  .btn-group
    display block

@media $breakpoint-medium
  .card-token-heading
    display grid
    grid-template-columns 1fr 6fr 3fr 3fr 3fr

  .token-rank, .token-symbol, .token-price
    display block

@media $breakpoint-large

  .card-token-heading
    grid-template-columns 1fr 6fr 3fr 3fr 3fr 3fr 2fr

  .token-change, .token-link
    display block

@media $breakpoint-xl
  .section-hero .text
    grid-column 2/span 10
</style>
