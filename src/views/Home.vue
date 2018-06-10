<template>
  <div class="home">
    <main>
      <swiper
        ref="homeSwiper"
        :options="swiperOption"
      >
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
      <icon-button
        v-if="translations.length > 0"
        @click="setCompleted">
        <check-icon />
      </icon-button>
      <icon-button
        v-if="translations.length > 0"
        @click="editTranslation">
        <pencil-icon />
      </icon-button>
      <icon-button
        @click="addTranslation">
        <plus-icon />
      </icon-button>
      <icon-button
        v-if="translations.length > 0"
        @click="deleteTranslation">
        <trash-icon />
      </icon-button>
    </footer>
    <translation-dialog
      v-if="translationData.opened"
      v-model="translationData.value"
      :opened="translationData.opened"
      @cancel="translationData.opened = false"
      @submit="submitTranslation"
    />
  </div>
</template>

<script>
import PlayItem from '@/components/PlayItem'
import IconButton from '@/components/IconButton'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { CheckIcon, PencilIcon, PlusIcon, TrashIcon } from '@/components/icons'
import TranslationDialog from '@/components/Dialog'
import { getUncompletedTranslations, updateTranslation, deleteTranslation } from '../db'

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
      translationData: {
        opened: false,
        value: {
          id: null,
          lv: '',
          en: ''
        }
      }
    }
  },
  computed: {},
  async mounted () {
    this.translations = await getUncompletedTranslations()
  },
  methods: {
    async setCompleted () {
      const translation = this.getCurrentTranslation()
      translation.completed = true
      await updateTranslation(translation)
      this.translations.splice(this.$refs.homeSwiper.swiper.activeIndex, 1)
    },
    editTranslation () {
      const translation = this.getCurrentTranslation()
      this.translationData.value.id = translation.id
      this.translationData.value.lv = translation.lv
      this.translationData.value.en = translation.en
      this.translationData.opened = true
    },
    async submitTranslation () {
      this.translationData.opened = false

      const payload = await updateTranslation(this.translationData.value)

      const index = this.translations.findIndex(translation => translation.id === payload.id)

      if (index === -1) {
        this.translations.push(payload)
      } else {
        this.translations[index] = Object.assign(this.translations[index], payload)
      }

      this.translationData.value = {
        id: null,
        lv: '',
        en: ''
      }
    },
    addTranslation (value) {
      this.translationData.opened = true
    },
    async deleteTranslation () {
      const translation = this.getCurrentTranslation()

      await deleteTranslation(translation.id)
      this.translations.splice(this.$refs.homeSwiper.swiper.activeIndex, 1)
    },
    getCurrentTranslation () {
      return this.translations[this.$refs.homeSwiper.swiper.activeIndex]
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
