import { GetterTree, MutationTree } from 'vuex'
import { State } from '../types'

type TodoGetter = GetterTree<State, any>

const state: State = {
  todos: [
    { text: 'todo 1', done: true },
    { text: 'todo 2', done: false },
    { text: 'todo 3', done: false },
  ]
}
const getters: TodoGetter = {
  todos: state => state.todos.filter(todo => !todo.done),
  dones: state => state.todos.filter(todo => todo.done),
}

const mutations: MutationTree<State> = {
  addTodo(state, newTodo) {
    const todoCopy = Object.assign({}, newTodo)
    state.todos.push(todoCopy)
  }
}


export const todos = {
  state,
  getters,
  mutations
}
