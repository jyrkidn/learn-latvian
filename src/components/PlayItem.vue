<template>
  <div class="play-item">
    <div class="locale">
      {{ question }}
    </div>
    <div class="word">
      {{ translation[question] }}
    </div>
    <div class="translation">
      <span v-if="showAnswer">
        {{ translation[answer] }}
      </span>
      <span v-else>
        <icon-button
          label="Show Answer"
          @click="showAnswer = true"
        >
          <eye-icon />
        </icon-button>
      </span>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton'
import { EyeIcon } from './icons'

export default {
  name: 'PlayItem',
  components: {
    IconButton,
    EyeIcon
  },
  props: {
    translation: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      showAnswer: false,
      question: null,
      answer: null
    }
  },
  created () {
    [this.question, this.answer] = this.shuffle(['lv', 'en'])
  }
}
</script>

<style lang="scss">
.play-item {
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: 0.33fr 0.33fr 0.33fr;
  grid-template-columns: 100%;

  .locale, .translation {
    color: #ffffff;
  }

  .locale {
    font-weight: 600;
    font-size: 2em;
    padding-left: 5px;
    align-self: end;
    text-transform: uppercase;
  }

  .word {
    background: #ffffff;
    color: #9E1B34;
    font-size: 3rem;

    display: grid;
    align-content: center;
    justify-content: center;
  }

  .translation {
    display: grid;
    grid-template-columns: 100%;
    font-size: 2rem;

    span {
      margin-top: 30px;
      justify-self: center;
    }
  }
}
</style>
