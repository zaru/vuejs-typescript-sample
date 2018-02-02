import { State } from '../types'


// Store
export interface State {
  todos: Todo[]
}

// Models
export interface  Todo {
  text: string
}

const state: State = {
  todos: [
    { text: 'hoge' }
  ]
}

export const todos = {
  state
}
