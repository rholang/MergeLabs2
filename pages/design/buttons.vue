<template>
  <main>
    <!-- NOTE: most of these btn examples were created before the dark mode -->
    <div class="dark section-first">
      <div class="tm-wrapper tm-section">
        <h2 class="tm-rf3 lh-title tm-bold">
          Dark background + glowing buttons
        </h2>
        <div class="row">
          <tm-button size="xl" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="l"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            color="var(--white)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="l">Cosmonaut</tm-button>
          <tm-button size="l" variant="outlined" glow>To infinity</tm-button>
          <tm-button size="l" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="m"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            color="var(--white)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="m">Cosmonaut</tm-button>
          <tm-button size="m" glow>To infinity</tm-button>
          <tm-button size="m" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="s"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            color="var(--white)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="s">Cosmonaut</tm-button>
          <tm-button size="s" glow>To infinity</tm-button>
          <tm-button size="s" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
      </div>
    </div>
    <div class="light">
      <div class="tm-wrapper">
        <h2 class="tm-rf3 tm-lh-title tm-bold">
          Light background + glowing buttons
        </h2>
        <div class="row">
          <tm-button size="xl" color="var(--bg)" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="l"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            color="var(--white)"
            glow
            >Beam me up</tm-button
          >
          <tm-button background-color="var(--bg)" color="var(--title)" size="l"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="l"
            border-color="var(--bg)"
            color="var(--bg)"
            variant="outlined"
            >To infinity</tm-button
          >
          <tm-button size="l" color="var(--black)" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="m"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            color="var(--white)"
            glow
            >Beam me up</tm-button
          >
          <tm-button background-color="var(--bg)" color="var(--title)" size="m"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="m"
            border-color="var(--bg)"
            color="var(--bg)"
            variant="outlined"
            >To infinity</tm-button
          >
          <tm-button size="m" color="var(--black)" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="s"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            color="var(--white)"
            glow
            >Beam me up</tm-button
          >
          <tm-button background-color="var(--bg)" color="var(--title)" size="s"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="s"
            border-color="var(--bg)"
            color="var(--bg)"
            variant="outlined"
            >To infinity</tm-button
          >
          <tm-button size="s" color="var(--black)" variant="text" glow
            >And beyond<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
      </div>
    </div>
    <div class="dark">
      <div class="tm-wrapper">
        <h2 class="tm-rf3 tm-lh-title tm-bold">
          Dark background + internal + external
        </h2>
        <div class="row">
          <tm-button to-link="internal" to="/design/typography" size="l" glow
            >Internal</tm-button
          >
          <tm-button
            to-link="external"
            href="https://github.com/cosmos/stargate"
            size="l"
            glow
            >External</tm-button
          >
        </div>
      </div>
      <div class="tm-wrapper">
        <h2 class="tm-rf3 tm-lh-title tm-bold">Disabled state</h2>
        <div class="row">
          <tm-button size="l" glow disabled>Disabled button</tm-button>
          <tm-button
            to-link="internal"
            to="/design/typography"
            size="l"
            glow
            disabled
            >Disabled link</tm-button
          >
        </div>
      </div>
    </div>
    <div class="dark">
      <div class="tm-wrapper">
        <h2 class="tm-rf3 tm-lh-title tm-bold">
          {{ capitalize($colorMode.preference) }}
          mode
        </h2>
        <div class="row">
          <tm-button
            to-link="external"
            href="https://github.com/cosmos/stargate"
            size="l"
            >Text color</tm-button
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TmButton from '~/components/TmButton.vue'

export default {
  components: {
    TmButton,
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
  head() {
    return {
      title: 'Buttons',
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description',
      //   },
      // ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.dark,
.light
  padding var(--spacing-9) 0
.light
  background white
  color black

.tm-button
  margin var(--spacing-7) var(--spacing-7) var(--spacing-7) 0
</style>
