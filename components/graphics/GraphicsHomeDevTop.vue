<template>
  <div event="scroll" class="container">
    <img src="~/assets/images/bg/home-dev-top-bg.png" class="bg" />
    <graphics-orbit-lines class="orbit" />
    <svg
      class="planets"
      width="1188"
      height="440"
      viewBox="0 0 1188 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g :originY="0" :strength="200" tag="g" filter="url(#filter0_i-414191)">
        <path
          d="M14.9449 144.046C-13.0264 100.715 -0.574825 42.9132 42.7562 14.942C86.0873 -13.0293 143.889 -0.577755 171.861 42.7533C199.832 86.0844 187.38 143.886 144.049 171.858C100.718 199.829 42.9162 187.377 14.9449 144.046Z"
          fill="url(#paint0_radial-636102)"
        />
      </g>
      <g :originY="0" :strength="140" tag="g">
        <path
          d="M1146.45 138.974C1184.11 159.322 1198.14 206.344 1177.79 244C1157.44 281.655 1110.42 295.686 1072.77 275.337C1035.11 254.989 1021.08 207.967 1041.43 170.311C1061.78 132.656 1108.8 118.625 1146.45 138.974Z"
          fill="url(#paint1_radial-897710)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i-414191"
          x="0.00683594"
          y="0.00390625"
          width="186.792"
          height="186.792"
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
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.656 0 0 0 0 0.4625 0 0 0 0.11 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <radialGradient
          id="paint0_radial-636102"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(159.5) rotate(126.33) scale(201.709)"
        >
          <stop stop-color="#310F41" />
          <stop offset="0.567337" stop-color="#160815" />
          <stop offset="0.840936" stop-color="#460D13" />
          <stop offset="1" stop-color="#9C4F2E" />
        </radialGradient>
        <radialGradient
          id="paint1_radial-897710"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1185.43 188.104) rotate(165.197) scale(164.086)"
        >
          <stop stop-color="#090909" />
          <stop offset="0.75" stop-color="#140D17" />
          <stop offset="0.880208" stop-color="#450F15" />
          <stop offset="1" stop-color="#624B10" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<style lang="stylus" scoped>
.container
  position relative

svg
  height auto

.bg
  width 100%
  user-select none
  filter blur(10px)

.orbit
  position absolute
  top 10%
  left 5.3%
  width 76%
  transform rotate(-60deg)

.planets
  position absolute
  width 56%
  left 44.4%
  top 10%
</style>
