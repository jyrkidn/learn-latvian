<template>
  <div class="group">
    <input
      :value="value"
      required
      type="text"
      @input="$emit('input', $event.target.value)"
    >
    <span class="highlight" />
    <span class="bar" />
    <label>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.group {
  position: relative;
  margin-bottom: 45px;

  input {
    font-size: 18px;
    padding: 10px 0;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid $primary;

    &:focus {
      outline:none;

    }

    &:focus ~ label, &:valid ~ label {
      top: -20px;
      font-size: 14px;
      color: $accent;
    }

    &:focus ~ .bar:before, &:focus ~ .bar:after {
      width: 50%;
    }

    &:focus ~ .highlight {
      animation: inputHighlighter 0.3s ease;
    }
  }

  label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;

    &:before, &:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: $primary;
      transition: 0.2s ease all;
    }

    &:before {
      left:50%;
    }
    &:after {
      right:50%;
    }
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
}

@-webkit-keyframes inputHighlighter {
  from { background:$accent; }
  to { width: 0; background: transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:$accent; }
  to { width: 0; background: transparent; }
}
@keyframes inputHighlighter {
  from { background:$accent; }
  to { width: 0; background: transparent; }
}
</style>
