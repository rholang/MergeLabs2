<template>
  <a
    v-if="
      item && item.fields && item.fields.website && item.fields.website !== 'x'
    "
    :href="item.fields.website"
    target="_blank"
    rel="noreferrer noopener"
  >
    <div class="logo-wrapper">
      <img
        v-if="item.fields && item.fields.logo"
        class="logo-wrapper__base"
        :src="item.fields.logo[0].url"
        :alt="`${item.fields.name} App logo`"
      /><img
        v-if="item.fields && item.fields.logo"
        class="logo-wrapper__top"
        :src="item.fields.logo[0].url"
        :alt="`${item.fields.name} App logo`"
      /><img
        v-if="!item.fields.logo && !item.fields"
        class="logo-wrapper__base"
        src="~assets/images/ecosystem/avatar-placeholder.svg"
        :alt="`${item.fields.name} App logo`"
      /><img
        v-if="!item.fields.logo && !item.fields"
        class="logo-wrapper__top"
        src="~assets/images/ecosystem/avatar-placeholder.svg"
        :alt="`${item.fields.name} App logo`"
      />
      <div class="logo-wrapper__color"></div>
    </div>
  </a>
  <div v-else-if="item && item.fields">
    <div class="logo-wrapper">
      <img
        v-if="item.fields && item.fields.logo"
        class="logo-wrapper__base"
        :src="item.fields.logo[0].url"
        :alt="`${item.fields.name} App logo`"
      /><img
        v-if="item.fields && item.fields.logo"
        class="logo-wrapper__top"
        :src="item.fields.logo[0].url"
        :alt="`${item.fields.name} App logo`"
      /><img
        v-if="!item.fields.logo && !item.fields"
        class="logo-wrapper__base"
        src="~assets/images/ecosystem/avatar-placeholder.svg"
        :alt="`${item.fields.name} App logo`"
      /><img
        v-if="!item.fields.logo && !item.fields"
        class="logo-wrapper__top"
        src="~assets/images/ecosystem/avatar-placeholder.svg"
        :alt="`${item.fields.name} App logo`"
      />
      <div class="logo-wrapper__color"></div>
    </div>
  </div>
  <div v-else>
    <div class="logo-wrapper">
      <img
        class="logo-wrapper__base"
        src="~assets/images/ecosystem/avatar-placeholder.svg"
        alt="Placeholder lgo"
      /><img
        class="logo-wrapper__top"
        src="~assets/images/ecosystem/avatar-placeholder.svg"
        alt="Placeholder logo"
      />
      <div class="logo-wrapper__color"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
}
</script>

<style lang="stylus" scoped>
.logo-wrapper
  width fit-content
  height fit-content
  padding 0.5rem
  border-radius 0.5rem
  display flex
  align-items center
  background var(--white-100)
  overflow hidden
  filter blur(0px)
  position relative

  &__color
    width 2rem
    height 2rem

  &__base
    width 2rem
    height 2rem
    position absolute
    filter blur(16px)
    transform scale(2.3)
    opacity 0.7

  &__top
    max-width 2rem
    max-height 2rem
    width 100%
    position absolute
    overflow hidden
    filter blur(0px)
</style>
