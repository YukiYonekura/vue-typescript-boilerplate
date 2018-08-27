import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/hello_world/hello_world.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
