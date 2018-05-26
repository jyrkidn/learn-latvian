<template>
  <div class="home">
    <v-carousel
      :hide-delimiters="true"
      :light="true"
      :lazy="true"
      :cycle="false"
      v-model="progress"
      class="primary"
      style="height: 50vh; box-shadow: none;">
      <v-carousel-item
        v-for="translation in translations"
        :key="translation.id">
        <v-container
          fluid
          fill-height
          style="padding: 0;">
          <v-layout column>
            <v-flex class="locale">
              LV
            </v-flex>
            <v-flex class="word">
              {{ translation.lv }}
            </v-flex>
            <v-flex class="translation">
              {{ !!translation.showAnswer }}
              <span v-if="translation.showAnswer">
                {{ translation.en }}
              </span>
              <span v-else>
                <v-btn
                  icon
                  color="white"
                  @click="translation.showAnswer = true">
                  <v-icon>remove_red_eye</v-icon>
                </v-btn>
              </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  computed: {
    translations () {
      return this.$store.getters.uncompletedTranslations
    },
    progress: {
      // getter
      get () {
        return this.$store.state.progress
      },
      // setter
      set (newValue) {
        this.$store.dispatch('updateProgress', newValue)
      }
    }
  }
}
</script>

<style lang="scss">
.carousel {
  padding: 0;
}
.carousel__left, .carousel__right {
  .theme--light.btn, .theme--light .btn {
    color: #9E1B34;
  }
}
.layout {
  // align-items: center;
}

.flex {
  width: 100vw;
}

.locale, .translation {
  color: #ffffff;
}

.locale {
  font-weight: 600;
  font-size: 2em;
  padding-left: 5px;
  // display: flex;
  // align-items: flex-end;
  // justify-content: flex-start;
  // text-transform: uppercase;
  // flex: 1;
}

.word {
  background: #ffffff;
  color: #9E1B34;
  // margin: 0 auto;

  // justify-content: center;
  // align-items: center;
  // word-wrap: break-word;
  // font-size: 6vw;

  // flex: 3;
}

.translation {
  flex: 1;

  .btn .btn__content .icon {
    color: #9E1B34;
  }
}
</style>
