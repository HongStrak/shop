import Vue from 'vue'
import resource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Introduction from '@/components/Introduction'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Shopcart from '@/components/Shopcart'

Vue.use(Router)


export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home/*,
      children:[{
      	path:'Introduction',component:Introduction
      },
      {
      	path:'',component:mini
      }
      ]*/
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
    },
    {
    	path: '/Search',
      name: 'Search',
      component: Search
  	},
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    }
  ]
})
