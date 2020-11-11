import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import IdCard from '../components/IdCard'
import InformationForm from '../components/InformationForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information-form',
      name: 'InformationForm',
      component: InformationForm
    },
    {
      path: '/id-card',
      name: 'IdCard',
      component: IdCard
    }
  ]
})
