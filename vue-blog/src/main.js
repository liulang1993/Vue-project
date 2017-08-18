// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './layout'
import VueRouter from 'vue-router'
import project from './components/project'
import index from './components/index'
import todo from './components/todo'
import slideshow from './components/slideshow'
import todolist from './components/todolist'
import newslist from './components/newslist'
import table from './components/table'
import froms from './components/froms'
import list from './components/list'
import signup from './components/signup'
import loginin from './components/loginin'

Vue.use(VueRouter)
// Vue.use(VueX)


let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:index
    },
    {
      path:'/todo',
      component:todo
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/project',
      component:project,
      children:[
        {
          path:'/table',
          component:table
        },
        {
          path:'/froms',
          component:froms
        },
        {
          path:'/list',
          component:list
        }
      ]
    },
    {
      path:'/todolist',
      component:todolist
    },
    {
      path:'/newslist',
      component:newslist
    },
    {
      path:'/signup',
      component:signup
    },
    {
      path:'/loginin',
      component:loginin
    }

  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
