<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <div class="left">
        <nuxt-link to="/ecosystem/tokens" class="dropdown-wrap__content">
          <span>Tokens</span>
        </nuxt-link>
        <nuxt-link to="/ecosystem/apps" class="dropdown-wrap__content">
          <span>Ecosystem</span>
        </nuxt-link>
        <nuxt-link to="/ecosystem/wallets" class="dropdown-wrap__content">
          <span>Wallets</span>
        </nuxt-link>
      </div>
      <div class="right">
        <tm-link
          href="https://v1.cosmos.network/community"
          class="dropdown-wrap__content"
        >
          <span class="tm-link-external">Community</span></tm-link
        >
        <tm-link
          href="https://v1.cosmos.network/events"
          class="dropdown-wrap__content"
        >
          <span class="tm-link-external">Events</span></tm-link
        >
        <tm-link
          href="https://v1.cosmos.network/contributors"
          class="dropdown-wrap__content"
        >
          <span class="tm-link-external">Contributors</span></tm-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
