import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import IdCard from '../components/IdCard'
import InformationForm from '../components/InformationForm'
import Dashboard from '../components/Dashboard'
import Search from '../components/Search'
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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
