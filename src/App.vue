<template>
  <div
    id="app"
    class="container">
    <vue-progress-bar/>
    <header>
      <router-link
        to="/"
        class="link"
      >Home</router-link>
      <router-link
        to="/overview"
        class="link"
      >Overview</router-link>
    </header>
    <router-view />
    <footer>
      <icon-button @click="setCompleted">
        <check-icon />
      </icon-button>
      <icon-button @click="editTranslation">
        <pencil-icon />
      </icon-button>
      <icon-button @click="addTranslation">
        <plus-icon />
      </icon-button>
      <icon-button @click="redraw">
        <refresh-icon />
      </icon-button>
      <icon-button @click="deleteTranslation">
        <trash-icon />
      </icon-button>
    </footer>
    <translation-dialog
      v-if="addTranslationData.opened"
      :opened="addTranslationData.opened"
      v-model="addTranslationData.value"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconButton from '@/components/IconButton'
import { CheckIcon, PencilIcon, PlusIcon, RefreshIcon, TrashIcon } from '@/components/icons'
import TranslationDialog from '@/components/Dialog'

export default {
  name: 'App',
  components: {
    IconButton,
    CheckIcon,
    PencilIcon,
    PlusIcon,
    RefreshIcon,
    TrashIcon,
    TranslationDialog
  },
  data () {
    return {
      addTranslationData: {
        opened: false,
        value: {
          lv: null,
          en: null
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'progressPercentage'
    ])
  },
  watch: {
    progressPercentage (value) {
      this.$Progress.set(value)
    }
  },
  created () {
    this.$Progress.set(this.progressPercentage)
  },
  methods: {
    setCompleted () {
      console.log('setCompleted')
    },
    editTranslation () {
      console.log('editTranslation')
    },
    addTranslation () {
      this.addTranslationData.opened = true
      console.log('addTranslation')
    },
    redraw () {
      console.log('redraw')
    },
    deleteTranslation () {
      console.log('deleteTranslation')
    }
  }
}
</script>

<style scoped lang="scss">
@import './assets/styles/variables';

.container {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  color: $secondary;
}

header, footer {
  justify-self: end;
  padding: 1rem;
}

.link {
  vertical-align: top;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  letter-spacing: 0.1em;
  text-align: center;
  font-size: 1rem;
  margin: 10px;
  position: relative;

  &.router-link-exact-active {
    text-decoration: underline;
  }
}
</style>
