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
  UPDATE_PROGRESS (state, progress) {
    state.progress = progress
  },
  ADD_TRANSLATION (state, translation) {
    Vue.set(state.translations, translation.id, translation)
  }
}

const actions = {
  updateProgress ({commit}, progress) {
    commit('UPDATE_PROGRESS', progress)
  },
  addTranslation ({commit}, translation) {
    translation.id = Object.keys(state.translations).length + 1
    translation.completed = false
    commit('ADD_TRANSLATION', translation)
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
