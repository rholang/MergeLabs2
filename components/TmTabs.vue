<template>
  <div>
    <div class="tabs" role="tablist">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'is-active': tab.isActive }"
        >
          <a
            :href="tab.href"
            role="tab"
            class="tm-rf3 tm-bold tm-lh-title"
            @click.prevent="selectTab(tab)"
            >{{ tab.name }}</a
          >
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.tabs
  user-select none
  align-items stretch
  display flex
  justify-content space-between
  overflow-x auto
  overflow-y hidden
  // margin-left calc(-1 * var(--wrap-gap))
  // margin-right calc(-1 * var(--wrap-gap))
  padding-left var(--wrap-gap)
  padding-right var(--wrap-gap)
  scrollbar-width none
  &::-webkit-scrollbar
    display none

.tabs ul
  align-items center
  display flex
  flex-direction row
  flex-shrink 0
  padding 0
  margin 0
  user-select none

.tabs li
  margin-right var(--wrap-gap)
  display inline-block

.tabs a
  align-items center
  color var(--white-300)
  justify-content center
  display inline-block
  padding var(--spacing-6) 0
  margin-bottom -1px
  vertical-align top
  transition color .15s ease-out, opacity .15s ease-out
  &:hover,
  &:focus
    color var(--link-hover)
  &:active
    opacity 0.7
    transition-duration 0s
  &:focus
    outline 0

.is-active a
  display inline-block
  padding var(--spacing-6) 0
  position relative
  z-index 1
  color var(--link)

// .tabs-details
//   margin-top var(--spacing-7)
//   margin-bottom var(--spacing-8)
</style>
