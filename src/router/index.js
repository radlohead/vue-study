import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Event from '@/components/Event'

Vue.use(Router)

const HelloWorldProps = {
  title: 'HelloWorld title!'
}

const EventParent = {
  template: `
    <div>
      nesting router
      <router-view></router-view>
    </div>
  `
}

const EventChild = {
  template: '<div>event child template</div>'
}

const EventChild2 = {
  template: '<div>event child template</div>'
}

const numFunc = route => {
  console.log('numFunc: ', route)
  return {
    num: route.params.num
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: HelloWorldProps
    },
    {
      path: '/event',
      component: EventParent,
      children: [
        {
          path: 'child',
          component: EventChild
        },
        {
          path: 'child2',
          component: EventChild2
        }
      ]
    },
    {
      path: '/event/:num',
      name: 'Event',
      component: Event,
      props: numFunc
    }
  ]
})
