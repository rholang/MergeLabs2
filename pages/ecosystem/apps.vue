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
            {{ activeApps.length }} apps and services built on Cosmos
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
            Discover a wide variety of apps, blockchains, wallets and explorers,
            built in the Cosmos ecosystem by developers and contributors from
            across the globe.
          </p>
          <div class="btn-group">
            <tm-button
              to-link="internal"
              to="/ecosystem/tokens"
              size="m"
              class="btn"
              variant="text"
              >Tokens
            </tm-button>
            <tm-button
              to-link="internal"
              to="/ecosystem/apps"
              size="m"
              class="btn"
              >Apps &amp; Services
            </tm-button>
            <tm-button
              to-link="internal"
              to="/ecosystem/wallets"
              size="m"
              class="btn"
              variant="text"
              >Wallets
            </tm-button>
          </div>
        </div>
      </div>
    </div>
    <SectionItems :items="activeApps" />

    <div class="tm-wrapper tm-container tm-section">
      <tm-crosshair class="center crosshair" />
      <tm-cta-cards :data="cards" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionItems from '~/components/ecosystem/SectionItems.vue'

export default {
  components: {
    SectionItems,
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
    ...mapGetters(['apps']),
    activeApps() {
      if (this.apps && this.apps.records && this.apps.records.length > 0) {
        return this.apps.records.filter((app) => app.fields.active)
      }
      return []
    },
  },
  mounted() {
    this.$store.commit('initApps')
  },
  head() {
    return {
      title: 'Apps & Services - Ecosystem',
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
  grid-template-columns repeat(1, 1fr)

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

@media $breakpoint-small
  .btn-group
    display block

  .grid-col-2
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-xl
  .section-hero .text
      grid-column 2/span 10
</style>
