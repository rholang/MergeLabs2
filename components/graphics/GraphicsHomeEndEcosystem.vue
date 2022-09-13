<template>
  <div class="container">
    <img src="~/assets/images/bg/home-end-eco-bg.png" class="bg" />
    <svg
      class="fg"
      width="577"
      height="615"
      viewBox="0 0 577 615"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0-501690)">
        <circle
          r="78"
          transform="matrix(-1 0 0 1 153 42)"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
        <circle
          r="78"
          transform="matrix(-1 0 0 1 388 273)"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
        <circle
          r="118"
          transform="matrix(-1 0 0 1 153 42)"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
        <circle
          r="118"
          transform="matrix(-1 0 0 1 388 273)"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
        <circle
          r="159"
          transform="matrix(-1 0 0 1 153 42)"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
        <circle
          r="159"
          transform="matrix(-1 0 0 1 388 273)"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
        <g :strength="15" tag="g">
          <circle
            cx="426.5"
            cy="159.5"
            r="18.5"
            fill="url(#paint1_radial-056938)"
          />
        </g>
        <g :strength="20" tag="g">
          filter="url(#filter0_i-962550)">
          <circle cx="187" cy="337" r="130" fill="url(#paint0_radial-219333)" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i-962550"
          x="23"
          y="207"
          width="294"
          height="276"
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
          <feOffset dx="-34" dy="16" />
          <feGaussianBlur stdDeviation="17.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.580543 0 0 0 0 0.1 0 0 0 0.15 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <radialGradient
          id="paint0_radial-219333"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(215.417 458.557) rotate(-105.912) scale(286.475 348.708)"
        >
          <stop offset="0.596806" stop-color="#181616" />
          <stop offset="0.866261" stop-color="#103D66" />
        </radialGradient>
        <radialGradient
          id="paint1_radial-056938"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(433.813 147.539) rotate(121.715) scale(33.4912 30.686)"
        >
          <stop offset="0.662512" stop-color="#452828" />
          <stop offset="0.827187" stop-color="#622B2B" />
          <stop offset="1" stop-color="#FFC672" />
        </radialGradient>
        <clipPath id="clip0-501690">
          <rect width="577" height="615" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>
<style lang="stylus" scoped>
.container
  position relative
  min-height 8rem

.bg
  max-width none
  width 140%
  margin-top -36%
  margin-left -14%
  margin-bottom -74%
  user-select none
  filter blur(5px)

.fg
  position absolute
  top -138%
  left -34%
  width 168%
  height auto
</style>
