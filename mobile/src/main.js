// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './components/homeSwiper.vue'

import 'muse-components/styles/base.less' // 加载基础的样式
// import appBar from 'muse-components/appBar'
// import avatar from 'muse-components/avatar'
// import iconButton from 'muse-components/iconButton'
// Vue.component(appBar.name, appBar)
// Vue.component(avatar.name, avatar)
// Vue.component(iconButton.name, iconButton)

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

const routes = [{
  path: '/',
  component: App
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
