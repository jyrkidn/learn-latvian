<template>
  <div
    v-if="opened"
    class="dialog-wrapper"
  >
    <div
      class="dialog"
    >
      <form
        @submit.prevent="submit"
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
            @click="cancel"
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
      this.$emit('val', this.value)
      this.$emit('submit')
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.dialog-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  z-index: 1300;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .dialog {
    width: 90%;
    height: 90%;
    background: $secondary;
    color: $primary;
    padding: 2em;

    form {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 100%;

      section {
        align-self: center;
      }

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
}
</style>
