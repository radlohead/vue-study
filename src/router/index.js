import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Event from '@/components/Event'

Vue.use(Router)

const EventProps = {
  title: 'vuex 없이 상태관리 해보기'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
      props: EventProps
    }
  ]
})
