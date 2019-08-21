import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Introduction from '@/components/Introduction'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      children:[{
      	path:'test',component:Introduction
      }]
    },
    {
    	path: '/Introduction',
      name: 'Introduction',
      component: Introduction
    }
  ]
})
