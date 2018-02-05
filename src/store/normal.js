// JavaScript が混在してい場合のサンプル

const state = {
  count: 0
}

const getters = {
  count: state => { return state.count }
}

const mutations = {
  increment (state) {
    state.count++
  }
}

export default {
  state,
  getters,
  mutations
}
