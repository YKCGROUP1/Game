// index.js

import Vue from 'vue';
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue';
import TestView from '../views/TestView.vue';
import DataView from "@/views/DataView.vue";
import ProductView from "@/views/ProductView.vue";
import HomeView from "@/views/HomeView.vue";

import axios from "../axios";
import store from "../store"
Vue.use(VueRouter)
const routes = [
    {
        path: '/home',
        name: 'HomeView',
        component: HomeView,
        children:[
            {
                path: '/data',
                name: 'DataView',
                title: '首页',
                component: DataView
            },
            {
                path: '/userCenter',
                name: 'UserCenter',
                component: () => import('@/views/UserCenter.vue'),
                title: '用户中心'
            },
            {
                path: '/echartView',
                name: 'echartView',
                component: () => import('@/views/EchartView.vue'),
                title: 'echartView'
            },
            // {
            //     path: '/test',
            //     name: 'TestView',
            //     component: TestView
            // },
            {
                path: '/product',
                name: 'ProductView',
                component: ProductView
            },
        ]
    },
    {
        path: '/',
        name: 'login',
        component: LoginView
    },




]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    let  token = localStorage.getItem("token");

    if(to.path == '/') {
        next();
    } else if (!token) {
        next({path: '/'})
    }




    let hasRoute = store.state.menus.hasRoutes

    if(token && !hasRoute) {
        axios.get("/api/nav",{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res=>{
            console.log(res.data.data)
            //拿到menuList
            store.commit("setMenuList",res.data.data)

            //拿到权限
            //store.commit("setPermList",res.data.data.authoritys)

            //console.log(store.state.menus.menuList)
            // 动态绑定路由
            let newRoutes = router.options.routes

            res.data.data.forEach(menu => {
                if (menu.children) {
                    menu.children.forEach(e => {

                        // 转成路由
                        let route = menuToRoute(e)

                        // 吧路由添加到路由管理中
                        if (route) {
                            newRoutes[0].children.push(route)
                        }

                    })
                }
            })
            console.log("newRoutes")
            console.log(newRoutes)
            router.addRoutes(newRoutes)

            hasRoute = true
            store.commit("changeRouteStatus", hasRoute)

        })
    }


    next()

})

const menuToRoute = (menu) => {

    if (!menu.component) {
        return null
    }

    let route = {
        name: menu.name,
        path: menu.path,
        meta: {
            title: menu.title
        }
    }
    route.component = () => import('@/views/' + menu.component +'.vue')

    return route
}

export default router