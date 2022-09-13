<template>
  <div class="frame">
    <svg
      class="planets"
      width="1494"
      height="995"
      viewBox="0 0 1494 995"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="1040.19"
        cy="513.113"
        rx="453.5"
        ry="326"
        fill="url(#paint0_radial-501753)"
      />
      <ellipse
        cx="795.692"
        cy="653.113"
        rx="481"
        ry="341"
        fill="url(#paint1_radial-501753)"
      />
      <path
        d="M552.756 634.731C602.346 648.9 631.061 700.587 616.892 750.177C602.723 799.768 551.036 828.482 501.445 814.313C451.855 800.144 423.14 748.457 437.309 698.866C451.478 649.276 503.166 620.561 552.756 634.731Z"
        fill="url(#paint2_radial-501753)"
      />
      <path
        d="M225.551 464.487C247.161 524.888 215.715 591.37 155.314 612.981C94.9136 634.591 28.4307 603.145 6.82061 542.744C-14.7895 482.343 16.6565 415.86 77.0572 394.25C137.458 372.64 203.941 404.086 225.551 464.487Z"
        fill="url(#paint3_radial-501753)"
      />
      <path
        d="M1239.8 76.7207C1240.23 119.521 1205.88 154.566 1163.08 154.996C1120.28 155.427 1085.24 121.079 1084.81 78.2794C1084.38 35.4795 1118.72 0.434427 1161.52 0.00400163C1204.32 -0.426424 1239.37 33.9208 1239.8 76.7207Z"
        fill="url(#paint4_radial-501753)"
      />
      <defs>
        <radialGradient
          id="paint0_radial-501753"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1040.01 513.379) rotate(-90) scale(337.352 453.681)"
        >
          <stop stop-color="#2F69FF" stop-opacity="0.92" />
          <stop offset="0.234375" stop-color="#2F82FF" stop-opacity="0.65" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial-501753"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(796.633 653.781) rotate(-90) scale(341.667 481.941)"
        >
          <stop stop-color="#8D07AE" />
          <stop offset="0.395833" stop-color="#73059A" stop-opacity="0.63" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial-501753"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(507.708 794.113) rotate(-74.4034) scale(169.231)"
        >
          <stop offset="0.197917" />
          <stop offset="0.765575" stop-color="#240B30" />
          <stop offset="1" stop-color="#2C5482" />
        </radialGradient>
        <radialGradient
          id="paint3_radial-501753"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(31.9894 614.253) rotate(-54.557) scale(250.478)"
        >
          <stop offset="0.729167" stop-color="#110505" />
          <stop offset="0.859375" stop-color="#581A3F" />
          <stop offset="1" stop-color="#945151" />
        </radialGradient>
        <radialGradient
          id="paint4_radial-501753"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1215.69 134.613) rotate(-131.442) scale(136.735)"
        >
          <stop offset="0.729167" stop-color="#1E071F" />
          <stop offset="0.859375" stop-color="#4E2A50" />
          <stop offset="1" stop-color="#6D568A" />
        </radialGradient>
      </defs>
    </svg>
    <graphics-validator class="validator" />
    <graphics-navigator-gem class="gem" />
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
  top 0
  left 7%
  width 103%

.gem
  top 27%
  left 19%
  width 25%

.validator
  position absolute
  top 40%
  left 59%
  width 13%
  filter blur(4px)
</style>
