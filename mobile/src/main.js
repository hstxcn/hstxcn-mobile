// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './Home'
import themes from './components/themes/themes.vue'

import routes from './routers'
import store from './store/store.js'

import axios from 'axios'
Vue.prototype.$http = axios

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);

import 'muse-components/styles/base.less' // 加载基础的样式
import flatButton from 'muse-components/flatButton'
Vue.component(flatButton.name, flatButton)
import raisedButton from 'muse-components/raisedButton'
Vue.component(raisedButton.name, raisedButton)
import iconButton from 'muse-components/iconButton'
Vue.component(iconButton.name, iconButton)
import avatar from 'muse-components/avatar'
Vue.component(avatar.name, avatar)
import chip from 'muse-components/chip'
Vue.component(chip.name, chip)
import floatButton from 'muse-components/floatButton'
Vue.component(floatButton.name, floatButton)
import popover from 'muse-components/popover'
Vue.component(popover.name, popover)
import menu from 'muse-components/menu/menu'
Vue.component(menu.name, menu)
import menuItem from 'muse-components/menu/menuItem'
Vue.component(menuItem.name, menuItem)
import dialog from 'muse-components/dialog'
Vue.component(dialog.name, dialog)
import stepper from 'muse-components/stepper/stepper'
Vue.component(stepper.name, stepper)
import step from 'muse-components/stepper/step'
Vue.component(step.name, step)
import stepContent from 'muse-components/stepper/stepContent'
Vue.component(stepContent.name, stepContent)
import stepLabel from 'muse-components/stepper/stepLabel'
Vue.component(stepLabel.name, stepLabel)
import infiniteScroll from 'muse-components/infiniteScroll'
Vue.component(infiniteScroll.name, infiniteScroll)
import divider from 'muse-components/divider'
Vue.component(divider.name, divider)



hotcss.designWidth = 1080;

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)



const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
