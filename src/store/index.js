import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    michis: [],
    loadingMichis: false
  },
  mutations: {
    MICHIS(state, payload) {
      state.michis = payload
    },
    LOADING_MICHIS(state, payload) {
      state.loadingMichis = payload
    },
    AGREGAR_MICHI(state, payload) {
      state.michis.push(payload)
    },
  },
  actions: {
    levantarMichis(context){
      axios
      .get('https://61b145c33c954f001722a877.mockapi.io/michis')
      .then(data => {
        context.commit("MICHIS", data.data)
        context.commit("LOADING_MICHIS", false)
      })
      .catch((err) => {console.error(`${err}`)})
    },

    agregarMichi(context, payload) {

      axios
        .post(
          `https://61b145c33c954f001722a877.mockapi.io/michis`,
          payload

        )
        .then(() => {
          context.commit("AGREGAR_MICHI", payload)
        })
        .catch((err) => {console.error(`${err}`)})

      
    }
  },
  modules: {
  }
})
