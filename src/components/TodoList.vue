<template>
  <div class="todo-lists">
    <p>Add new todo <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)"></p>

    <div class="container">
      <div class="column">
        <h3>Todo</h3>
        <ul>
          <li v-for="(todo, index) in todos" :key="index" @click="done(todo)">{{ todo.text }}</li>
        </ul>
      </div>
      <div class="column">
        <h3>Done</h3>
        <ul>
          <li v-for="(todo, index) in dones" :key="index">{{ todo.text }}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import { Todo } from '../types'

@Component
export default class TodoList extends Vue {
  @Getter todos: Todo[]
  @Getter dones: Todo[]
  @Mutation addTodo: void
  @Mutation done: void

  newTodo: Todo = {
    text: '',
    done: false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container {
    width: 50%;
    margin: 0 auto;
    display: flex;
    .column {
      min-width: 250px;
      border: 1px solid #cccccc;
      padding: 10px;
      margin: 10px;
    }
  }
  li {
    text-align: left;
    cursor: pointer;
  }
</style>
