<template>
  <button
    :class="{ squared: squared }"
    @click="onClick"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'IconButton',
  props: {
    squared: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 35px;
  line-height: 35px;
  color: $primary;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  outline: none;
  border: none;
  user-select: none;
  border-radius: 2px;
  transition: all .3s ease-out;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.225);
  overflow: hidden;
  position: relative;
  margin: 0 2px;
  padding: 0;
  line-height: normal;
  border-radius: 50%;
  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.3);

  fill: $primary;
  background-color: $secondary;

  &.squared {
    width: 56px;
    height: 56px;
  }

  &:hover {
    text-decoration: none;
    box-shadow: 0 4px 11px 0px rgba(0,0,0,0.375);
    background-color: lighten($secondary, 8%);
  }

  i {
    display: inline-block;
    float: none;
    width: inherit;
    margin: 0;
    font-size: inherit;
    text-align: center;
    line-height: none;
    vertical-align: middle;
  }

  &.btn-link {
    box-shadow: none !important;
    background-color: transparent !important;

    &:hover {
      text-decoration: underline !important;
      background-color: transparent !important;
      box-shadow: none !important;
    }
  }

  &.big {
    width: 55px;
    height: 195px;
    margin-top: -22px;
  }
}
</style>
