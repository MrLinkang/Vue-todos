import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todo',
      component: resolve => require(['@/components/TodoList'], resolve)
    },
    
    {
      path: '/todo',
      name: 'todoList',
      component: resolve => require(['@/components/TodoList'], resolve)
    },
    {
      path: '/detail/:todoId',
      name: 'detail',
      component: resolve => require(['@/components/Detail'], resolve)
    }
  ]
})
