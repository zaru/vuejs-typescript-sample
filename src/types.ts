// Store
export interface State {
  todos: Todo[]
}

export interface Counter {
  count: number
}

// Models
export interface  Todo {
  text: string,
  done: boolean
}
