import Vue from 'vue'
import Vuex from 'vuex'

import { todos } from './todos'
import normal from './normal.js'
// import { counter } from './counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    todos,
    normal
  }
})

