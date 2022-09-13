<template>
  <div class="coins">
    <svg
      width="541"
      height="440"
      viewBox="0 0 541 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="diffuse"
    >
      <g opacity="0.2" filter="url(#filter0_f-548114)">
        <path
          d="M367.868 167.474C367.868 167.474 283.284 81.7977 170.663 141.496C75.421 191.979 131.105 330.649 217.363 301.156C276.462 280.948 303.694 295.254 339.896 312.705C397.323 340.387 471.695 270.555 367.868 167.474Z"
          fill="white"
        />
        <path
          d="M367.868 167.474C367.868 167.474 283.284 81.7977 170.663 141.496C75.421 191.979 131.105 330.649 217.363 301.156C276.462 280.948 303.694 295.254 339.896 312.705C397.323 340.387 471.695 270.555 367.868 167.474Z"
          fill="url(#paint0_linear-016230)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f-548114"
          x="0.544991"
          y="0.0630569"
          width="539.57"
          height="439.022"
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
            stdDeviation="60.1443"
            result="effect1_foregroundBlur"
          />
        </filter>
        <linearGradient
          id="paint0_linear-016230"
          x1="236.919"
          y1="118.644"
          x2="296.111"
          y2="339.553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FD91FF" />
          <stop offset="0.34375" stop-color="#A0A8FF" />
          <stop offset="0.947005" stop-color="#C9F2FF" />
        </linearGradient>
      </defs>
    </svg>
    <graphics-coin-blank class="coin" :shadow="true" />
    <graphics-coin-blank class="coin" />
    <graphics-coin-blank class="coin" />
    <svg
      width="58"
      height="72"
      viewBox="0 0 58 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="trail"
    >
      <path
        d="M1.05859 70.951C12.5813 68.5005 23.0449 64.6347 31.7263 59.6207C40.4076 54.6068 47.0997 48.5642 51.34 41.9107C55.5802 35.2572 57.2674 28.1515 56.2851 21.0847C55.3028 14.0178 51.6743 7.15837 45.6504 0.980469"
        stroke="url(#paint0_linear-780234)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear-780234"
          x1="31.6868"
          y1="-11.383"
          x2="25.2011"
          y2="48.6322"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.254598" stop-color="white" stop-opacity="0" />
          <stop offset="0.901042" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
    <img src="~/assets/images/coin-atom.svg" class="atom" />
  </div>
</template>
<style lang="stylus" scoped>
.coins
  position relative
  width 115%
  padding-bottom 73%
  height 0

svg,
img
  position absolute
  height auto

.diffuse
  width 133%
  top -4%
  left -7%

.coin
  width 50%

  &:nth-child(2)
    top 24%
    left 54%
  &:nth-child(3)
    top 11%
    left 49%
  &:nth-child(4)
    left 54%

.trail
  width 13%
  top 57%
  left 86%

.atom
  width 60%
  top 47%
  left 28%
</style>
