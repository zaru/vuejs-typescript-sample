import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import TodoList from '@/components/TodoList.vue'
import NormalCounter from 'components/NormalCounter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo_list',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/normal_counter',
      name: 'NormalCounter',
      component: NormalCounter
    }

  ]
})
