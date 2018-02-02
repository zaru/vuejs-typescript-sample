import { GetterTree } from 'vuex'
import { State } from '../types'

type TodoGetter = GetterTree<State, any>

const state: State = {
  todos: [
    { text: 'hoge' }
  ]
}
const getters: TodoGetter = {
  todos: state => state.todos,
}


export const todos = {
  state,
  getters
}
