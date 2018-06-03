<template>
  <div
    v-if="opened"
    class="dialog-wrapper"
  >
    <div
      class="dialog"
    >
      <form
        method="dialog"
        @submit="submit"
      >
        <section>
          <input-field
            v-model="value.lv"
            label="Latvian"
          />
          <input-field
            v-model="value.en"
            label="English"
          />
        </section>
        <div class="footer">
          <icon-button
            :squared="false"
            class="btn-link"
            type="reset"
          >
            Cancel
          </icon-button>
          <icon-button
            :squared="false"
            class="btn-link"
            type="submit"
          >
            Save
          </icon-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from './InputField'
import IconButton from './IconButton'

export default {
  name: 'Dialog',
  components: {
    InputField,
    IconButton
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    submit () {
      console.log(this.value)

      this.$emit('val', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.dialog-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";

  width: 100%;
  height: 100%;
  z-index: 1300;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);

  .dialog {
    grid-area: a;
    align-self: center;
    justify-self: center;
    background: $secondary;
    color: $primary;
    padding: 2em;

    .footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 2em;
      grid-gap: .5em;

      button {
        justify-self: center;
      }
    }
  }
}
</style>
