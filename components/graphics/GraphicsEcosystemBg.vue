<template>
  <div class="frame">
    <graphics-validator class="validator" />
    <graphics-navigator-gem class="gem" />
    <svg
      class="planets"
      width="2252"
      height="846"
      viewBox="0 0 2252 846"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="1872.29"
        cy="493.022"
        rx="312.599"
        ry="271"
        transform="rotate(17.385 1872.29 493.022)"
        fill="url(#paint0_radial-040412)"
      />
      <g filter="url(#filter0_f-040412)">
        <ellipse
          cx="603.5"
          cy="411.5"
          rx="563.5"
          ry="371.5"
          fill="url(#paint1_radial-040412)"
        />
      </g>
      <path
        d="M591.945 299.046C563.974 255.715 576.425 197.913 619.756 169.942C663.087 141.971 720.889 154.422 748.861 197.753C776.832 241.084 764.38 298.886 721.049 326.858C677.718 354.829 619.916 342.377 591.945 299.046Z"
        fill="url(#paint2_radial-040412)"
      />
      <circle
        cx="1599.5"
        cy="649.5"
        r="117.5"
        fill="url(#paint3_radial-040412)"
      />
      <defs>
        <filter
          id="filter0_f-040412"
          x="0"
          y="0"
          width="1207"
          height="823"
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
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur" />
        </filter>
        <radialGradient
          id="paint0_radial-040412"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1872.9 493.552) rotate(-90) scale(271.53 313.21)"
        >
          <stop stop-color="#452E00" />
          <stop offset="1" stop-color="#005B61" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial-040412"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(605.961 413.122) rotate(-90) scale(373.122 565.961)"
        >
          <stop stop-color="#FB6464" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial-040412"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(736.5 155) rotate(126.33) scale(201.709)"
        >
          <stop stop-color="#662884" />
          <stop offset="0.567337" stop-color="#111111" />
          <stop offset="1" stop-color="#621013" />
        </radialGradient>
        <radialGradient
          id="paint3_radial-040412"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1628.77 532) rotate(121.986) scale(277.065)"
        >
          <stop stop-color="#6D4BCC" />
          <stop offset="0.550999" stop-color="#2D224D" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<style lang="stylus" scoped>
.frame
  position absolute
  width 100%
  padding-bottom 80%

svg
  position absolute
  height auto

.planets
  position absolute
  top 7%
  left -30%
  width 158%

.gem
  top 14%
  left 44%
  width 12%
  filter blur(4px)

.validator
  position absolute
  top 18%
  left 21%
  width 8%
  filter blur(7px)
</style>
