<template>
  <svg
    v-if="$nuxt.$colorMode.value === 'dark'"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="svg_3" spreadMethod="pad" y2="0" x2="1" y1="0" x1="0">
        <stop offset="0" stop-opacity="0.99609" stop-color="#0070e0" />
        <stop offset="1" stop-opacity="0.99609" stop-color="#1bc0f7" />
      </linearGradient>
    </defs>
    <g>
      <title>Layer 1</title>
      <text
        id="svg_1"
        font-style="normal"
        font-weight="bold"
        xml:space="preserve"
        text-anchor="start"
        font-family="'Josefin Sans'"
        font-size="43"
        y="70"
        x="40"
        stroke-width="0"
        stroke="#000"
        fill="url(#svg_3)"
      >
        MergeLabs
      </text>
    </g>
  </svg>
</template>
