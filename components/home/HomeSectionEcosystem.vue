<template>
  <div class="tm-container tm-section tm-wrapper tm-grid-base">
    <div class="content">
      <h2
        class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
      >
        Community-owned and operated
      </h2>
      <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
        Enter a new universe of connected services.
      </div>
      <p
        class="subtitle offset tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
      >
        Cosmos apps and services connect using IBC, the Inter-Blockchain
        Communication protocol. This innovation enables you to freely exchange
        assets and data across sovereign,
        <tm-tooltip term="decentralized-blockchains"
          >decentralized blockchains</tm-tooltip
        >.
      </p>
      <div class="btn-group">
        <tm-button
          to-link="external"
          href="https://v1.cosmos.network/intro"
          size="l"
          class="btn"
          >Learn<span class="icon__right">&rarr;</span></tm-button
        >
        <tm-button
          to-link="internal"
          to="/ecosystem/tokens"
          size="l"
          variant="text"
          class="btn"
          >Explore tokens<span class="icon__right">&rarr;</span></tm-button
        >
      </div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="value tm-rf6 tm-lh-title tm-bold tm-title">
          200<span class="tm-rf4">+</span>
        </div>
        <div class="desc tm-rf-1 tm-rf0-m-up tm-lh-title">
          Apps &amp; services, and growing.
        </div>
      </div>
      <div class="stat">
        <div class="value tm-rf6 tm-lh-title tm-bold tm-title">
          ${{ Math.round(marketcap) }}B<span class="tm-rf4">+</span>
          <small class="currency tm-rf-1 tm-lh-title tm-muted">USD</small>
        </div>
        <div class="desc tm-rf-1 tm-rf0-m-up tm-lh-title">
          Digital assets under management.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['marketcap']),
  },
  mounted() {
    this.$store.commit('initTokens')
  },
}
</script>

<style lang="stylus" scoped>
.tm-container
  z-index 1

.content,
.stats
  grid-column 1 / -1

.title
  margin-top var(--spacing-6)
  max-width 10.5em

.subtitle
  margin-top var(--spacing-6)

.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)

.stats
  position relative
  display grid
  grid-template-columns repeat(auto-fit, minmax(12rem, 1fr))
  grid-auto-rows minmax(min-content, max-content)
  grid-gap 0 var(--grid-gap-x)
  margin-top var(--spacing-9)

  &:before,
  &:after
    content ""
    position absolute
    right 0

  &:before
    angle-accent(ne)
    top 0

  &:after
    angle-accent(se)
    bottom 0

.stat
  padding-bottom var(--spacing-8)

.value
  position relative
  margin-top var(--spacing-8)
  white-space nowrap

.currency
  position absolute
  top 0
  margin-left var(--spacing-4)
  margin-top var(--spacing-4)
  writing-mode vertical-rl

.desc
  margin-top var(--spacing-3)

@media $breakpoint-small
  .btn-group
    display block

  .stats
    grid-column 2 / -1

@media $breakpoint-medium
  .content
    grid-column 2 / span 7

  .stats
    grid-column 2 / span 7

@media $breakpoint-xl
  .content
    grid-column 2 / span 7

  .stats
    grid-column 10 / span 3
    margin-top 0
</style>
