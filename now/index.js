import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'

const routes = [
    {
        path: '/',
        component: Layout, // 布局
        redirect: '/home',
        children: [
            {
                path: 'home', // 子路由(路径前无需加'/') 命名空间 路由懒加载
                name: 'home',
                component: () => import('../views/Home.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', // 404页面(一定要放末尾)
        name: 'NotFound',
        component: () => import('@/components/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/admin'), // 路由前缀(自定义｜#)
    routes
})
export default router
