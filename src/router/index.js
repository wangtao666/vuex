import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Conuter from '@/components/Conuter'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Conuter',
      component: Conuter
    },
    {
      path: '/test',
        name: 'Test',
      component: Test
    }
  ]
})
