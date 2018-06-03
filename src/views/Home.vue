<template>
  <main>
    <flickity
      ref="flickity"
      :options="flickityOptions"
    >
      <PlayItem
        v-for="translation in translations"
        :key="translation.id"
        :translation="translation"
        class="carousel-cell" />
    </flickity>
    <icon-button
      v-if="selectedIndex > 0"
      class="carousel-btn carousel-prev btn-link big"
      @click="previous()"
    >
      <previous-icon class="big" />
    </icon-button>
    <icon-button
      v-if="selectedIndex !== translations.length - 1"
      class="carousel-btn carousel-next btn-link big"
      @click="next()"
    >
      <next-icon class="big" />
    </icon-button>
  </main>
</template>

<script>
import Flickity from 'vue-flickity'
import PlayItem from '@/components/PlayItem'
import { PreviousIcon, NextIcon } from '@/components/icons'
import IconButton from '@/components/IconButton'

export default {
  name: 'Home',
  components: {
    Flickity,
    PlayItem,
    IconButton,
    PreviousIcon,
    NextIcon
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        setGallerySize: false
      },
      selectedIndex: 0
    }
  },
  computed: {
    translations () {
      return this.shuffle(this.$store.getters.uncompletedTranslations)
    }
  },
  mounted () {
    this.$store.dispatch('updateProgress', this.$refs.flickity.selectedIndex())
    this.$refs.flickity.on('select', () => {
      this.selectedIndex = this.$refs.flickity.selectedIndex()
      this.$store.dispatch('updateProgress', this.selectedIndex)
    })
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },

    previous () {
      this.$refs.flickity.previous()
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  justify-self: center;
  align-self: center;
  width: 100vw;
  height: 100%;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.carousel-prev {
    left: 0;
  }
  &.carousel-next {
    right: 0;
  }
}
</style>

<style lang="scss">
main {
  .flickity-enabled {
    height: 100%;

    .carousel-cell {
      width: 100vw;
    }
  }
}
</style>
