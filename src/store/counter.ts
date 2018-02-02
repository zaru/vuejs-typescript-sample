import { Counter } from '../types'
import { MutationTree } from 'vuex'

const state: Counter = {
  count: 0
}

const mutations: MutationTree<any> = {
  increment: state => state.count++
  // increment (state): void {
  //   state.count++
  // }
}

export default {
  state,
  mutations
}
