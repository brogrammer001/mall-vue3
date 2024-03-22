import { createRouter, createWebHistory } from 'vue-router'
import IndexHome from '../components/index/IndexHome.vue'
import LoginIndex from '../components/login/LoginIndex.vue'
import RegisterIndex from '../components/register/RegisterIndex.vue'
import ForgetPasswordIndex from '../components/forgetpassword/ForgetPasswordIndex.vue'
import SearchIndex from '../components/search/SearchIndex.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: IndexHome
    },
    {
        path: '/login',
        name: 'login',
        component: LoginIndex
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterIndex
    },
    {
        path: '/forgetPassword',
        name: 'forgetPassword',
        component: ForgetPasswordIndex
    },
    {
        path: '/search/:searchData',
        name: 'search',
        component: SearchIndex
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;


