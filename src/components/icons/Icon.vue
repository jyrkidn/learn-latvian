<template>
  <svg
    viewBox="0 0 24 24">
    <path
      :d="path"
    />
  </svg>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 24px;
  height: 24px;

  &.big {
    width: 55px;
    height: 195px;
  }
}
</style>
