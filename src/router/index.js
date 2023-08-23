import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useTokenStore } from '@/stores/user'

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局守卫
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    const store = useTokenStore() // 在守卫中使用pinia一定要定义在守卫内部
    if (store.accessToken) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})

export default router
