import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
import preload from '@/common/preload'

Vue.use(VueRouter)

const BkMainEntry = () => import(/* webpackChunkName: 'entry' */'@/views')
const BkNotFound = () => import(/* webpackChunkName: 'none' */'@/views/404')

const horizontalViewecbmonmp = () => import(/* webpackChunkName: 'horizontalView' */'@/views/horizontalView/bkindex')
const bbsdetail = () => import(/* webpackChunkName: 'bbsdetail' */'@/views/horizontalView/bbsdetail.vue')
const bbshome1 = () => import(/* webpackChunkName: 'bbshome1' */'@/views/horizontalView/bbshome1.vue')

const routes = [
    {
        path: '/',
        name: 'appMain',
        component: BkMainEntry,
        redirect: { name: 'bbsdetail' },
        children: [
            {
                path: 'horizontal-nav',
                name: 'horizontalViewecbmonmp',
                component: horizontalViewecbmonmp,
                redirect: { name: 'bbsdetail' },
                children: [
                    { path: 'bbsdetail', name: 'bbsdetail', component: bbsdetail, meta: { pageName: '论坛帖子详情' } },
                    { path: 'bbshome1', name: 'bbshome1', component: bbshome1, meta: { pageName: '论坛首页' } },
                    { path: '*', component: BkNotFound, meta: { pageName: '404' } }
                ]
            }
        ]
    },
    // 404
    {
        path: '/404',
        name: '404',
        component: BkNotFound,
        meta: {
            pageName: '404'
        }
    },
    {
        path: '*',
        redirect: { name: '404' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: window.PROJECT_CONFIG.SITE_URL,
    routes: routes
})

let preloading = true
let pageMethodExecuting = true

router.beforeEach(async (to, from, next) => {
    next()
})

router.afterEach(async (to, from) => {
    store.commit('setMainContentLoading', true)

    preloading = true
    await preload()
    preloading = false

    const pageDataMethods = []
    const routerList = to.matched
    routerList.forEach(r => {
        Object.values(r.instances).forEach(vm => {
            if (typeof vm.fetchPageData === 'function') {
                pageDataMethods.push(vm.fetchPageData())
            }
            if (typeof vm.$options.preload === 'function') {
                pageDataMethods.push(vm.$options.preload.call(vm))
            }
        })
    })

    pageMethodExecuting = true
    await Promise.all(pageDataMethods)
    pageMethodExecuting = false

    if (!preloading && !pageMethodExecuting) {
        store.commit('setMainContentLoading', false)
    }

    const meta = to.meta || {}
    document.title = meta.pageName || 'index'
})

export default router
