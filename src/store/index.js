import DataService from '@/services/DataService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    DataService: new DataService(),
    utilisateur: {},
    medecin: {},
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
