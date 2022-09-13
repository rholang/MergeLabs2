<template>
  <div :class="['bg-clip', flip && 'flip']">
    <svg
      v-if="sun"
      class="bg bg-back"
      width="2024"
      height="2024"
      viewBox="0 0 2024 2024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1012" cy="1012" r="1012" fill="url(#paint0_radial-299071)" />
      <defs>
        <radialGradient
          id="paint0_radial-299071"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1012 1012) rotate(-90) scale(1012)"
        >
          <stop offset="0.0833333" stop-color="#A5FBFF" />
          <stop offset="0.338542" stop-color="#6C8DFF" />
          <stop offset="0.677083" stop-color="#631C69" />
          <stop offset="1" stop-color="#72087B" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <svg
      class="bg bg-front"
      width="2022"
      height="439"
      viewBox="0 0 2022 439"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-if="flip"
        d="M2022 232.331C1705.16 367.416 1362.12 439 1011 439C660.14 439 316.649 367.522 0 232.631L0 0.000244141L2022 0V232.331Z"
        fill="url(#paint0_radial-063349)"
      />
      <path
        v-else
        d="M2022 206.669C1705.16 71.584 1362.12 2.65069e-05 1011 0C660.14 -2.64873e-05 316.649 71.4782 0 206.369L0 439L2022 439V206.669Z"
        fill="url(#paint0_radial-063349)"
      />
      <defs>
        <radialGradient
          v-if="!sun"
          id="paint0_radial-063349"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1070 734) rotate(-90) scale(706 3296)"
        >
          <stop offset="0.777954" />
          <stop offset="0.991435" stop-color="#262629" />
        </radialGradient>
        <radialGradient
          v-else-if="flip"
          id="paint0_radial-063349"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1041.89 -321) rotate(90) scale(760 2536.3)"
        >
          <stop offset="0.817689" />
          <stop offset="0.991435" stop-color="#181A49" />
        </radialGradient>
        <radialGradient
          v-else
          id="paint0_radial-063349"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1041.89 760) rotate(-90) scale(760 2536.3)"
        >
          <stop offset="0.817689" />
          <stop offset="0.991435" stop-color="#181A49" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    flip: {
      /**
       * `false` | `true` (vertically flipped)
       */
      type: Boolean,
      default: false,
    },
    sun: {
      /**
       * `false` | `true` (show the sun behind the planet)
       */
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="stylus" scoped>
.bg-clip
  position absolute
  overflow hidden
  padding-bottom 62%

.bg
  position absolute
  left 0
  width 100%
  height auto

.bg-back
  top 0
  .flip &
    top auto
    bottom 0

.bg-front
  bottom -21%
  filter blur(14px)

  .flip &
    top -21%
    bottom auto
</style>
