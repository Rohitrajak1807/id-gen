import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import IdCard from '../components/IdCard'
import InformationForm from '../components/InformationForm'
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
      path: '/id-card/:rollNumber',
      name: 'IdCard',
      component: IdCard
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
