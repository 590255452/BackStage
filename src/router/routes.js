import Layout from '@/layout'

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue')
            },
            {
                path: 'userlist',
                component: () => import('../views/user/UserList.vue')
            },
            {
                path: 'rolelist',
                component: () => import('../views/authority/RoleList.vue')
            },
            {
                path: 'authoritylist',
                component: () => import('../views/authority/AuthorityList.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

export default routes
