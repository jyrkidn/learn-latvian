import Vue from 'vue'
import Vuex from 'vuex'
import shuffle from './utils/shuffle'

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
  UPDATE_TRANSLATION (state, translation) {
    Vue.set(state.translations, translation.id, translation)
  },
  COMPLETE_TRANSLATION (state, {id, completed}) {
    Vue.set(state.translations[id], 'completed', completed)
  },
  DELETE_TRANSLATION (state, translationId) {
    Vue.delete(state.translations, translationId)
  }
}

const actions = {
  updateProgress ({commit}, progress) {
    commit('UPDATE_PROGRESS', progress)
  },
  updateTranslation ({commit}, translation) {
    if (!translation.id) {
      translation.id = Object.keys(state.translations).length + 1
    }
    if (!translation.hasOwnProperty('completed')) {
      translation.completed = false
    }

    commit('UPDATE_TRANSLATION', translation)
  },
  completeTranslation ({commit}, translation) {
    commit('COMPLETE_TRANSLATION', translation)
  },
  deleteTranslation ({commit}, translationId) {
    commit('DELETE_TRANSLATION', translationId)
  }
  // fetchTranslations({commit}) {
  //   db.tra
  // }
}

const getters = {
  completedTranslations: state => Object.values(state.translations).filter(translation => translation.completed),
  uncompletedTranslations: state => {
    return shuffle(Object.values(state.translations).filter(translation => !translation.completed))
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
