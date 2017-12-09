import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Conuter from '@/components/Conuter'
import Test from '@/components/test'
import Todo from '@/components/todo'
import Content from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/todo/content',
      name: 'Content',
      component: Content
    }
  ]
})
