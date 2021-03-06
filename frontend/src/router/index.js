import Vue from 'vue' 
import Router from 'vue-router' 
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'
import NewsFeed from '../views/NewsFeed.vue'

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
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/newsfeed',
        name: 'Newsfeed',
        component: NewsFeed
    }
  ]
})