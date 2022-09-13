<template>
  <lite-youtube :videoid="video" :playlabel="title" />
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: 'NmytpuD33lY',
    },
    title: {
      type: String,
      default: 'Starport Demo',
    },
  },
}
</script>
