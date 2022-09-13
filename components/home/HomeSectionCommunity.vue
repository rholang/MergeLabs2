<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <div class="text">
      <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
        Meet the worldwide community.
      </h2>
      <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrower">
        Join a fast-growing community of developers and innovators connected all
        over the world, building the new era of the internet.
      </p>
      <tm-button
        to-link="external"
        href="https://cosmos.network/community"
        size="l"
        variant="text"
        class="btn"
        >Community<span class="icon__right">&#8599;</span></tm-button
      >
    </div>
    <ul class="list">
      <li v-for="item in links" :key="item.logo" class="list-item">
        <tm-link :href="item.url">
          <div class="icon">
            <component :is="`icon-${item.logo}`" />
          </div>
          <div class="details">
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-link-external">
              {{ item.title }}
            </h4>
            <p
              class="desc tm-rf-1 tm-rf0-m-up tm-lh-copy tm-muted tm-measure-narrower tm-measure-narrow-l-up"
            >
              {{ item.desc }}
            </p>
          </div>
        </tm-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'

export default {
  components: {
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
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
}
</script>

<style lang="stylus" scoped>
.tm-section
  z-index 1

.tm-section:after
  content ""
  angle-accent(sw)
  margin-top var(--spacing-7)

.text,
.list
  grid-column 1/-1

.subtitle,
.btn
  margin-top var(--spacing-6)

.list
  margin-top var(--spacing-5)
  display grid
  grid-template-columns repeat(auto-fit, minmax(20rem, 1fr))
  grid-gap 0 var(--grid-gap-x)
  list-style none
  padding 0

.list-item
  margin-top var(--spacing-9)

.list-item a
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  gap var(--spacing-7)
  hover-raise(-($px*2))
  border-radius $border-radius-5

.desc
  margin-top var(--spacing-3)
  transition color .2s $ease-out

  a:hover &,
  a:focus &
    color inherit

@media $breakpoint-medium
  .text
    grid-column 2/-2

@media $breakpoint-large
  .text,
  .list
    grid-column span 4

  .list
    display block
    margin-top 0

  .list-item:first-child
    margin-top 0

@media $breakpoint-xl
  .text
    grid-column 2/span 5

  .list
    grid-column span 6
</style>
