import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Event from '@/components/Event'

Vue.use(Router)

const HelloWorldProps = {
  title: 'HelloWorld title!'
}

const EventProps = {
  title: 'vuex 없이 상태관리 해보기'
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
      name: 'Event',
      component: Event,
      props: EventProps
    }
  ]
})
