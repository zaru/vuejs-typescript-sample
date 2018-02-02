<template>
  <div class="todo-lists">
    <input type="text" v-model="newTodo" @keyup.enter="addTodo">

    <ul>
      <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Todo } from '../types'

@Component
export default class TodoList extends Vue {
  @Getter todos: Todo[]

  newTodo: string = ''

  addTodo (): void {
    this.todos.push({ text: this.newTodo })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
