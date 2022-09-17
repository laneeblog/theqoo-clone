import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingString',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/StringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/HtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/InputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/SelectView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckbox',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/CheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/RadioView.vue'
      )
  },
  {
    path: '/databinding/textarea',
    name: 'DataBindingTextarea',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/TextareaView.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/AttributeView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/StyleView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/ClassView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/ListView.vue'
      )
  },
  {
    path: '/databinding/serverlist',
    name: 'DataBindingServerList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/databinding/ServerListView.vue'
      )
  },
  {
    path: '/event/eventblur',
    name: 'EventBlur',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/event/EventBlur.vue'
      )
  },
  {
    path: '/event/eventchange',
    name: 'EventBlur',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/event/EventChange.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/extra/ComputedView.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'Computed',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/extra/WatchView.vue'
      )
  },
  {
    path: '/others/composition',
    name: 'Composition',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/others/CompositionView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
