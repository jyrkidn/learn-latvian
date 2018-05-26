import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  translations: {
    1: {
      id: 1,
      lv: 'Paldies',
      en: 'Thank you',
      completed: false
    },
    2: {
      id: 2,
      lv: 'Ludzu',
      en: 'Please',
      completed: false
    },
    3: {
      id: 3,
      lv: 'Viens',
      en: 'One',
      completed: true
    }
  },
  progress: 0
}

const mutations = {
  updateProgress (state, progress) {
    state.progress = progress
  }
}

const actions = {
  updateProgress ({commit}, progress) {
    commit('updateProgress', progress)
  }
}

const getters = {
  completedTranslations: state => Object.values(state.translations).filter(translation => translation.completed),
  uncompletedTranslations: state => Object.values(state.translations).filter(translation => !translation.completed),
  progressPercentage: (state, getters) => {
    return ((state.progress + 1) / getters.uncompletedTranslations.length) * 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
