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

Vue.use(VueRouter)

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
      component:project
    },
    {
      path:'/todolist',
      component:todolist
    },
    {
      path:'/newslist',
      component:newslist
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
