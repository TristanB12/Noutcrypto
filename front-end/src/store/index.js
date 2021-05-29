import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    popupDone: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if(token)
        state.isUserLoggedIn = true;
      else
        state.isUserLoggedIn = false;
    },
    setUser(state, user) {
      state.user = user;
    },
    setPopup(state, popup) {
      state.popupDone = popup
    }
  },
  actions: {
    setToken({commit}, token) {
      commit('setToken', token)
    },
    setUser({commit}, user) {
      commit('setUser', user)
    },
    setPopup({commit}, popup) {
      commit('setPopup', popup)
    }
  },
  modules: {
  }
})