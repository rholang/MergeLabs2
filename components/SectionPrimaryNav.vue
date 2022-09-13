<template>
  <div class="nav-container">
    <div class="navs">
      <nav class="nav nav-primary tm-container" role="navigation">
        <vsm-menu :menu="menu" class="tm-wrapper">
          <!-- LEFT -->
          <template #before-nav>
            <li class="vsm-section vsm-logo-section">
              <nuxt-link to="/" class="logo tm-title">
                <logo-cosmos-wordmark class="logo__cosmos" />
                <span class="sr-only">Cosmos</span>
              </nuxt-link>
            </li>
          </template>
          <!-- CENTER -->
          <template #default="data">
            <component :is="data.item.content" class="vsm-content" />
            <component
              :is="data.item.secondaryContent"
              class="vsm-content--secondary"
            />
          </template>
          <!-- RIGHT -->
          <template #after-nav>
            <vsm-mob>
              <mobile-content />
            </vsm-mob>
          </template>
        </vsm-menu>
      </nav>

      <!-- Uncomment for secondary nav -->
      <!-- <nav v-if="secondary" class="nav nav-secondary" role="navigation">
        <section-secondary-nav />
      </nav> -->
    </div>
  </div>
</template>

<script>
import mobileContent from '~/components/content/mobileContent'
import buildDropdownTop from '~/components/content/buildDropdownTop'
import exploreDropdownTop from '~/components/content/exploreDropdownTop'
import exploreDropdownBottom from '~/components/content/exploreDropdownBottom'
import learnDropdownBottom from '~/components/content/learnDropdownBottom'
import learnDropdownTop from '~/components/content/learnDropdownTop'
import LogoHubBrandmark from '~/components/logos/LogoHubBrandmark.vue'
import LogoCosmosWordmark from '~/components/logos/LogoCosmosWordmark.vue'

export default {
  components: {
    mobileContent,
    LogoCosmosWordmark,
    LogoHubBrandmark,
  },
  data() {
    return {
      secondary: false, // temporary to hide secondary nav
      menu: [
        {
          title: 'Learn',
          dropdown: 'learn',
          content: learnDropdownTop,
          secondaryContent: learnDropdownBottom,
          attributes: {
            class: 'tm-rf-1 tm-lh-title tm-medium',
          },
        },
        {
          title: 'Build',
          dropdown: 'build',
          content: buildDropdownTop,
          attributes: {
            class: 'tm-rf-1 tm-lh-title tm-medium',
          },
        },
        {
          title: 'Explore',
          dropdown: 'explore',
          content: exploreDropdownTop,
          secondaryContent: exploreDropdownBottom,
          attributes: {
            class: 'tm-rf-1 tm-lh-title tm-medium',
          },
        },
      ],
    }
  },
}
</script>

<style src="~/assets/styles/nav.styl" lang="stylus" />

<style lang="stylus" scoped>
$navbar-height = 5rem
$navbar-mobile-menu = 200

.nav-container
  position absolute
  top 0
  left 0
  right 0

.navs
  position relative
  z-index 2

.nav
  ul
    padding 0
  li
    list-style-type none
  .logo
    display flex
    align-items center
    gap var(--spacing-4)
    padding var(--spacing-6) 0
    color inherit
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    &:focus
      outline 0
      opacity 0.8
    svg
      width auto
    &__cosmos
      height 1.125rem
    &-secondary
      margin-right auto
  .vsm-logo-section
    z-index 1
  &-secondary .logo
    svg
      width 2rem
      height auto
  .tm-link
    position relative
    display block
    border-radius $border-radius-2
    // /* exact link will show the primary color for only the exact matching link */
  .tm-link.nuxt-link-exact-active
    cursor default
    &:after
      content ""
      position absolute
      display block
      border-right 1px solid
      height var(--spacing-3)
      bottom 0
      left 50%

@media $breakpoint-large-max
  .nav
    &-primary.is-active
      background var(--bg)
      .light-mode &
        background var(--fg)
    .tm-link
      &.nuxt-link-exact-active:after
        transform rotate(90deg)
        left -15px
        bottom 50%
        transform-origin bottom

@media $breakpoint-large
  .nav
    ul
      margin-right calc(-1 * var(--spacing-5))
      margin-left calc(-1 * var(--spacing-5))
      display flex
      justify-content center
    &-second
      display block
      grid-columns 1
    &-last
      flex 1 1 0%
    &-mobile-toggle
      display none

  // .nav-second .nuxt-link-exact-active:before
  //   content ""
  //   position absolute
  //   display block
  //   border-bottom 1px solid
  //   width calc(1rem + 1px)
  //   bottom -1px
  //   left 50%
  //   margin-left -0.5rem

  // .nav-secondary
  //   display flex
  //   border-top 1px solid var(--white-100)
  //   .light-mode &
  //     border-top-color var(--trans-gray-900)
  //   margin-top -1px
</style>
