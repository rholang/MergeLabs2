<template>
  <div class="card-token">
    <div class="token-rank align-right">{{ token.rank }}</div>
    <div class="token-name">
      <TokenLogo :item="item" />
      <div class="text log tm-rf1 tm-bold tm-lh-copy">
        <tm-link
          v-if="
            item &&
            item.fields &&
            item.fields.website &&
            item.fields.website !== 'x'
          "
          :href="item.fields.website"
        >
          {{ token.name }}
        </tm-link>
        <span v-else>{{ token.name }}</span>
      </div>
    </div>
    <div class="token-symbol align-right">{{ token.symbol }}</div>
    <div class="token-price align-right">
      ${{ abbrNumber(token.price.usd, 2) }}
    </div>
    <div class="token-change align-right">
      {{ Number(token.price.usd_24h_change).toFixed(2) }}%
    </div>
    <div class="token-marketcap align-right">
      ${{ abbrNumber(token.price.usd_market_cap, 2) }}
    </div>
    <div class="token-link align-right">
      <tm-button
        v-if="
          item &&
          item.fields &&
          item.fields.website &&
          item.fields.website !== 'x'
        "
        to-link="external"
        :href="item.fields.website"
        size="m"
        variant="text"
        class="btn"
        ><span class="icon__right">&#8599;</span></tm-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TokenLogo from '~/components/ecosystem/TokenLogo.vue'

export default {
  components: {
    TokenLogo,
  },
  props: {
    token: { type: Object, required: true },
  },
  computed: {
    ...mapGetters(['apps']),
    item() {
      if (this.apps && this.apps.records && this.apps.records.length > 0) {
        return this.apps.records.find(
          (record) => record.fields.name === this.token.ecosystemName
        )
      }
      return {}
    },
  },
  methods: {
    abbrNumber(num, digits) {
      const si = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'B' },
        { value: 1e12, symbol: 'T' },
      ]
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
      let i
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
          break
        }
      }
      return (
        (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-token
  display grid
  grid-template-columns 6fr 3fr
  line-height 3rem

  border-top 2px solid var(--fg)
  padding 0.5rem 0

.token-name
  display flex
  align-items center
  .text
    margin-left 0.5rem

.align-right
  text-align right
  align-items center

.token-rank, .token-symbol, .token-price, .token-change, .token-link
  display none

.token-rank
  padding-right 1rem

.token-link
  padding-right 1.5rem
@media $breakpoint-medium
  .card-token
    grid-template-columns 1fr 6fr 3fr 3fr 3fr

  .token-rank, .token-symbol, .token-price
    display block

  .token-name
    .text
      margin-left 1rem

@media $breakpoint-large
  .card-token
    grid-template-columns 1fr 6fr 3fr 3fr 3fr 3fr 2fr

  .token-change, .token-link
    display block
</style>
