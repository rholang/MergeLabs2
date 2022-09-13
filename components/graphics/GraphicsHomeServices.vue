<template>
  <div event="scroll" class="container">
    <img src="~/assets/images/bg/home-services-bg.png" class="bg" />
    <graphics-orbit-lines class="orbit" />
    <svg
      class="fg"
      width="1381"
      height="1381"
      viewBox="0 0 1381 1381"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g :strength="-20" type="rotate" transform-origin="50% 50%" tag="g">
        <path
          d="M884.914 275.446C890.408 343.431 839.973 402.981 772.263 408.453C704.552 413.926 645.208 363.249 639.713 295.264C634.219 227.278 684.654 167.729 752.364 162.256C820.075 156.784 879.419 207.461 884.914 275.446Z"
          fill="url(#paint0_radial-330959)"
        />
      </g>
      <g
        :strength="-40"
        type="rotate"
        transform-origin="50% 50%"
        tag="g"
        filter="url(#filter0_i-182008)"
      >
        <path
          d="M1025.93 501.581C1052.31 515.478 1062.43 548.13 1048.53 574.511C1034.63 600.891 1001.98 611.011 975.602 597.114C949.221 583.217 939.101 550.566 952.998 524.185C966.895 497.804 999.547 487.684 1025.93 501.581Z"
          fill="url(#paint1_radial-904360)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i-182008"
          x="946.765"
          y="495.348"
          width="108"
          height="108"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.9285 0 0 0 0 0.725 0 0 0 0 1 0 0 0 0.21 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <radialGradient
          id="paint0_radial-330959"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(782.901 159.787) rotate(117.261) scale(290.883 290.364)"
        >
          <stop stop-color="#EF994A" />
          <stop
            offset="0.255208"
            stop-color="#FF6F6F"
            stop-opacity="0.536826"
          />
          <stop offset="0.550999" stop-color="#D427FF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial-904360"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1043.55 537.099) rotate(163.847) scale(106.235 96.5448)"
        >
          <stop stop-color="#6151C0" />
          <stop offset="0.71875" stop-color="#A14BC2" />
          <stop offset="0.942708" stop-color="#CBCAFF" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<style lang="stylus" scoped>
.container
  position relative

svg
  position relative
  width 100%
  height auto

.orbit
  position absolute
  left 17.6%
  top 31.4%
  width 60%
  transform rotate(-15deg)

.bg
  position relative
  width 115%
  left -7%
  top -9%
  max-width none
  filter blur(10px)
  user-select none

.fg
  position absolute
  width 57%
  left 21%
  top 19%
</style>
