<template>
  <div class="home">
    <main>
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="translation in translations"
          :key="translation.id"
        >
          <PlayItem
            :translation="translation"
            class="carousel-cell" />
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination" />
        <div
          slot="button-prev"
          class="swiper-button-prev" />
        <div
          slot="button-next"
          class="swiper-button-next" />
      </swiper>
    </main>
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
      v-model="addTranslationData.value"
      :opened="addTranslationData.opened"
      @cancel="cancelAddTranslation"
      @submit="submitAddTranslation"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PlayItem from '@/components/PlayItem'
import IconButton from '@/components/IconButton'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { CheckIcon, PencilIcon, PlusIcon, RefreshIcon, TrashIcon } from '@/components/icons'
import TranslationDialog from '@/components/Dialog'

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
    PlayItem,
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
      translations: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      addTranslationData: {
        opened: false,
        value: {
          lv: '',
          en: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'uncompletedTranslations'
    ])
  },
  watch: {
    uncompletedTranslations (data) {
      console.log(data)
      this.translations = data
    }
  },
  created () {
    this.translations = this.shuffle(this.uncompletedTranslations)
  },
  methods: {
    setCompleted () {
      console.log('setCompleted')
    },
    editTranslation () {
      console.log('editTranslation')
    },
    addTranslation (value) {
      this.addTranslationData.opened = true
      console.log('addTranslation', value)
    },
    cancelAddTranslation () {
      this.addTranslationData.opened = false
    },
    submitAddTranslation () {
      this.addTranslationData.opened = false
      this.$store.dispatch('addTranslation', this.addTranslationData.value)
      this.addTranslationData.value = {
        lv: '',
        en: ''
      }
    },
    redraw () {
      this.translations = this.shuffle(this.translations)
      console.log('redraw', this.translations[0].lv)
    },
    deleteTranslation () {
      console.log('deleteTranslation')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}

footer {
  justify-self: end;
  padding: 1rem;
}
</style>

<style lang="scss">
@import '../assets/styles/variables';

main {
  .swiper-container {
    height: 100%;
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%239E1834'/%3E%3C/svg%3E");
  }
  .swiper-button-next {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%239E1834'/%3E%3C/svg%3E");
  }
  .swiper-button-disabled {
    display: none;
  }
  .swiper-pagination-progressbar {
    background: none;
    height: 2px;
    position: fixed;
    top: 0px;

    .swiper-pagination-progressbar-fill {
      background: $secondary;
    }
  }
}
</style>
