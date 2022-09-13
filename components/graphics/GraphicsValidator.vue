<template>
  <div class="v-container">
    <svg
      class="v-base"
      width="551"
      height="641"
      viewBox="0 0 551 641"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M275.496 481.022L275.496 640.017L550.996 322.028L275.496 481.022Z"
        :fill="`url(#${id}-paint0_linear-127634)`"
      />
      <path
        d="M275.5 481.022L275.5 640.017L0 322.028L275.5 481.022Z"
        :fill="`url(#${id}-paint1_linear-127634)`"
      />
      <rect
        width="318.088"
        height="318.087"
        transform="matrix(0.866114 -0.499847 0.866114 0.499847 0 322.028)"
        :fill="`url(#${id}-paint2_radial-127634)`"
      />
      <path
        v-if="coins | planet"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.834 387.887C452.978 351.461 452.978 292.402 389.834 255.976C326.689 219.55 224.313 219.55 161.169 255.976C98.0382 292.395 98.0245 351.435 161.128 387.863L161.139 387.87L161.173 387.889L161.199 387.904C224.346 424.313 326.7 424.307 389.834 387.887Z"
        :fill="`url(#${id}-paint3_linear-127634)`"
      />
      <defs>
        <linearGradient
          :id="`${id}-paint0_linear-127634`"
          x1="389.562"
          y1="409.884"
          x2="447.934"
          y2="557.139"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#80E2F8' : '#71A1FF'
            "
          />
          <stop
            offset="1"
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#DA17C6' : '#DA17C6'
            "
          />
        </linearGradient>
        <linearGradient
          :id="`${id}-paint1_linear-127634`"
          x1="164.087"
          y1="417.843"
          x2="103.062"
          y2="557.139"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#8CDFF7' : '#93B7FF'
            "
          />
          <stop
            offset="1"
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#DD54CF' : '#DA17C6'
            "
          />
        </linearGradient>
        <radialGradient
          :id="`${id}-paint2_radial-127634`"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.265 216.245) rotate(-44.9244) scale(309.458 347.373)"
        >
          <stop
            :offset="$nuxt.$colorMode.value === 'light' && '0.0525602'"
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#E0FFFE' : '#C1CDF6'
            "
          />
          <stop
            offset="1"
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#B1DAFF' : '#8DA6FF'
            "
          />
        </radialGradient>
        <linearGradient
          v-if="coins | planet"
          :id="`${id}-paint3_linear-127634`"
          x1="264.911"
          y1="416.517"
          x2="267.565"
          y2="287.834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.4" />
          <stop offset="1" stop-color="white" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
    <span v-if="coins > 0" class="v-coins">
      <graphics-coin-blank
        v-for="i in Math.min(coins, 5)"
        :key="i"
        class="coin"
        lighting="bottom"
      />
    </span>
    <div v-if="planet" class="planet"></div>
    <svg
      v-if="coins | planet"
      class="v-beam"
      width="747"
      height="640"
      viewBox="0 0 747 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6" :filter="`url(#${id}-filter0_f-259871)`">
        <path
          d="M224.14 357.71L224.279 357.909H224.284C232.164 368.794 243.779 378.992 259.128 387.853L259.169 387.877L259.173 387.879L259.199 387.894C322.346 424.303 424.7 424.297 487.834 387.877C504.326 378.362 516.511 367.304 524.388 355.509L735.608 52.4153L11.3877 52.4153L222.815 355.809C223.244 356.445 223.686 357.078 224.14 357.71Z"
          :fill="`url(#${id}-paint1_radial-259871)`"
        />
      </g>
      <defs>
        <filter
          :id="`${id}-filter0_f-259871`"
          x="0.774665"
          y="41.8023"
          width="745.447"
          height="384.007"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.30652"
            result="effect1_foregroundBlur"
          />
        </filter>
        <radialGradient
          :id="`${id}-paint1_radial-259871`"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(373.497 414.936) rotate(-90) scale(363.49 736.795)"
        >
          <stop stop-color="white" />
          <stop
            offset="1"
            :stop-color="
              $nuxt.$colorMode.value === 'light' ? '#C9C0FD' : '#4100AC'
            "
            stop-opacity="0"
          />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    coins: {
      /**
       * `null` | `number` - 5 coins max
       */
      type: Number,
      default: 0,
    },
    planet: {
      /**
       * `false` | `true
       */
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: null,
    }
  },
  mounted() {
    this.id = this._uid
  },
}
</script>
<style lang="stylus" scoped>
.v-container
  position relative

svg
  height auto

.v-base
  width 100%
  display block

.v-beam
  position absolute
  width 136%
  top 0%
  left -18%

.planet
  position absolute
  width 50%
  padding-bottom 50%
  top 8%
  left 25%
  border-radius 50%
  background radial-gradient(71.57% 71.57% at 52.1% -9.62%, #ECEDF7 0%, #FFFFFF 100%)
  opacity 0.96

.coin
  position absolute
  width 56%
  &:nth-child(1)
    top 37%
    left 24.5%
  &:nth-child(2)
    top 30%
    left 20.5%
  &:nth-child(3)
    top 22.6%
    left 26%
  &:nth-child(4)
    top 16%
    left 24%
  &:nth-child(5)
    top 9.4%
    left 27%
</style>
