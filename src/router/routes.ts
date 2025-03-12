const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Glimpse | Home'
        },
        component: () => import('./../views/home/HomeScreen.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        meta: {
            title: 'Glimpse | Detail'
        },
        component: () => import('./../views/detail/DetailScreen.vue')
    }
]

export default routes