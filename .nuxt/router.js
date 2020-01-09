import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ece3b770 = () => interopDefault(import('../pages/results/index.vue' /* webpackChunkName: "pages/results/index" */))
const _1cfcb32f = () => interopDefault(import('../pages/wizard/index.vue' /* webpackChunkName: "pages/wizard/index" */))
const _4a4e73be = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/results",
    component: _ece3b770,
    name: "results"
  }, {
    path: "/wizard",
    component: _1cfcb32f,
    name: "wizard"
  }, {
    path: "/",
    component: _4a4e73be,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
