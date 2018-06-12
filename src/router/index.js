import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Project from '@/components/Project/Project'
import Say from '@/components/Say/Say'
import News from '@/components/News/News'
import Doctor from '@/components/Doctor/Doctor'
import Pay from '@/components/Pay/Pay'
import Baike from '@/components/Baike/Baike'
import About from '@/components/About/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
     {
      path: '/Project',
      component:Project
    },
     {
      path: '/Say',
      component:Say
    },
     {
      path: '/News',
      component:News
    },
     {
      path: '/Doctor',
      component:Doctor
    },
     {
      path: '/Pay',
      component:Pay
    },
     {
      path: '/Baike',
      component:Baike
    },
     {
      path: '/About',
      component:About
    }
  ]
})
