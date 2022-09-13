<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <div class="left">
        <tm-link
          href="https://v1.cosmos.network/intro"
          class="dropdown-wrap__content"
        >
          <span class="tm-link-external">Introduction</span></tm-link
        >
        <tm-link href="/features" class="dropdown-wrap__content">
          <span>Features</span>
        </tm-link>
      </div>
      <div class="right">
        <nuxt-link to="/learn/staking" class="dropdown-wrap__content">
          <span>What is staking?</span>
        </nuxt-link>
        <nuxt-link to="/learn/faq" class="dropdown-wrap__content">
          <span>FAQ</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
