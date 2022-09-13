<template>
  <div :key="item.id" class="item">
    <a
      v-if="item.fields.website && item.fields.website !== 'x'"
      :href="item.fields.website"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div class="logo-wrapper">
        <img
          v-if="item.fields.logo"
          class="logo-wrapper__base"
          :src="item.fields.logo[0].url"
          :alt="`${item.fields.name} App logo`"
        /><img
          v-if="item.fields.logo"
          class="logo-wrapper__top"
          :src="item.fields.logo[0].url"
          :alt="`${item.fields.name} App logo`"
        /><img
          v-if="!item.fields.logo"
          class="logo-wrapper__base"
          src="~assets/images/ecosystem/avatar-placeholder.svg"
          :alt="`${item.fields.name} App logo`"
        /><img
          v-if="!item.fields.logo"
          class="logo-wrapper__top"
          src="~assets/images/ecosystem/avatar-placeholder.svg"
          :alt="`${item.fields.name} App logo`"
        />
        <div class="logo-wrapper__color"></div>
      </div>
    </a>
    <div v-else>
      <div class="logo-wrapper">
        <img
          v-if="item.fields.logo"
          class="logo-wrapper__base"
          :src="item.fields.logo[0].url"
          :alt="`${item.fields.name} App logo`"
        /><img
          v-if="item.fields.logo"
          class="logo-wrapper__top"
          :src="item.fields.logo[0].url"
          :alt="`${item.fields.name} App logo`"
        /><img
          v-if="!item.fields.logo"
          class="logo-wrapper__base"
          src="~assets/images/ecosystem/avatar-placeholder.svg"
          :alt="`${item.fields.name} App logo`"
        /><img
          v-if="!item.fields.logo"
          class="logo-wrapper__top"
          src="~assets/images/ecosystem/avatar-placeholder.svg"
          :alt="`${item.fields.name} App logo`"
        />
        <div class="logo-wrapper__color"></div>
      </div>
    </div>
    <div class="text">
      <div class="tm-rf1 tm-bold tm-lh-title tm-title">
        <a
          v-if="item.fields.website && item.fields.website !== 'x'"
          :href="item.fields.website"
          target="_blank"
          rel="noreferrer noopener"
          >{{ item.fields.name
          }}<span
            v-if="item.fields.status !== 'Unknown'"
            v-tooltip.top="item.fields.status"
            class="dot"
          >
            <icon-dot
              fill="var(--dot-color, rgba(59, 66, 125, 0.12))"
              :style="{
                '--dot-color': `${dotColor[cleanText(item.fields.status)]}`,
              }"
            ></icon-dot> </span
        ></a>
        <div v-else class="text__top__name__none">
          {{ item.fields.name
          }}<span
            v-if="item.fields.status !== 'Unknown'"
            v-tooltip.top="item.fields.status"
            class="dot"
          >
            <icon-dot
              fill="var(--dot-color, rgba(59, 66, 125, 0.12))"
              :style="{
                '--dot-color': `${dotColor[cleanText(item.fields.status)]}`,
              }"
            ></icon-dot>
          </span>
        </div>
      </div>
      <div
        v-if="!item.fields.category || item.fields.category !== '?'"
        class="tm-muted"
      >
        {{ item.fields.category }}
      </div>
      <div class="text__list">
        <a
          v-if="item.fields.docs && item.fields.docs !== 'x'"
          v-tooltip.bottom="'Docs'"
          class="list-item fields"
          :href="item.fields.docs"
          target="_blank"
          rel="noreferrer noopener"
          ><img class="icon" src="~assets/brands/gray/docs.svg" alt="Docs" /></a
        ><a
          v-if="item.fields.github && item.fields.github !== 'x'"
          v-tooltip.bottom="'GitHub'"
          class="list-item fields"
          :href="item.fields.github"
          target="_blank"
          rel="noreferrer noopener"
          ><img
            class="icon"
            src="~assets/brands/gray/github.svg"
            alt="GitHub" /></a
        ><a
          v-if="item.fields.chat && item.fields.chat !== 'x'"
          v-tooltip.bottom="'Chat'"
          class="list-item fields"
          :href="item.fields.chat"
          target="_blank"
          rel="noreferrer noopener"
          ><img class="icon" src="~assets/brands/gray/chat.svg" alt="Chat" /></a
        ><a
          v-if="item.fields.twitter && item.fields.twitter !== 'x'"
          v-tooltip.bottom="'Twitter'"
          class="list-item fields"
          :href="item.fields.twitter"
          target="_blank"
          rel="noreferrer noopener"
          ><img
            class="icon"
            src="~assets/brands/gray/twitter.svg"
            alt="Twitter"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import IconDot from '~/components/icons/IconDot.vue'
export default {
  components: {
    IconDot,
  },
  props: {
    item: { type: Object, required: true },
  },
  data() {
    return {
      dotColor: {
        mainnet: '#4ACF4A',
        testnet: '#BA3FD9',
        development: '#FF9500',
        proofofconcept: '#3B427D',
        beta: '#66A1FF',
        alpha: '#BCE7FF',
        live: '#4ACF4A',
      },
    }
  },
  methods: {
    cleanText(item) {
      if (item) {
        return item.split(' ').join('').toLowerCase()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.dot
  padding 0.25rem

.item
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  text-decoration none
  border-radius .5rem
  transition all .25s
  gap 1.5rem

.logo-wrapper
  width fit-content
  height fit-content
  padding 1.25rem
  border-radius 1rem
  display flex
  align-items center
  background var(--white-100)
  overflow hidden
  filter blur(0px)
  position relative

  &__color
    width 4.5rem
    height 4.5rem

  &__base
    width 4.5rem
    height 4.5rem
    position absolute
    filter blur(16px)
    transform scale(2.3)
    opacity 0.7

  &__top
    max-width 4.5rem
    max-height 4.5rem
    width 100%
    position absolute
    overflow hidden
    filter blur(0px)

.text
  display flex
  flex-direction column

  &__list
    display inline-flex
    justify-content flex-start
    flex-direction row
    margin-top auto

.list-item + .list-item
  margin-left 1rem

.list-item
  opacity 0.7

  &:hover
    opacity 1

.icon
  width 1.5rem
  height 1.5rem

@media screen and (max-width: 400px)
  .item
    gap 1rem

  .logo-wrapper

    &__item
      width 2.5rem
      height 2.5rem

  .text
    &__list
      margin-top 1rem

@media screen and (max-width: 320px)
  .logo-wrapper
    padding 0.75rem

    &__base
      max-width 3rem
      max-height 3rem

    &__top
      max-width 3rem
      max-height 3rem

    &__color
      max-width 3rem
      max-height 3rem

  .text
    &__list
      margin-top 0.5rem
</style>
