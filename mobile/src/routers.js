// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */



 const routers = [{
   path: '/',
   name: 'home',
   component: function(resolve) {
     require(['./Home.vue'], resolve)
   }
 },{
   path: '/themes',
   component: function(resolve) {
     require(['./components/themes/themes.vue'], resolve)
   }
 },{
   path: '/recs',
   name: 'recs',
   component: function(resolve) {
     require(['./components/recs/recs.vue'], resolve)
   }
 },{
   path: '/bonus',
   name: 'bonus',
   component: function(resolve) {
     require(['./components/bonus/bonus.vue'], resolve)
   }
 },{
   path: '/aboutUs',
   name: 'aboutUs',
   component: function(resolve) {
     require(['./components/aboutUs/aboutUs.vue'], resolve)
   }
 },{
   path: '/phx',
   name: 'phx',
   component: function(resolve) {
     require(['./components/phxHome/phxHome.vue'], resolve)
   }
 },{
   path: '/details',
   name: 'deatails',
   component: function(resolve) {
     require(['./components/phxHome/phxDetails.vue'], resolve)
   }
 },{
   path: '/step',
   name: 'step',
   component: function(resolve) {
     require(['./components/stepFlow/stepFlow.vue'], resolve)
   }
 },{
   path: '/ques',
   name: 'ques',
   component: function(resolve) {
     require(['./components/ques/ques.vue'], resolve)
   }
 },{
   path: '/hrphx',
   name: 'hrphx',
   component: function(resolve) {
     require(['./components/phxIn/phxIn.vue'], resolve)
   }
 }
 ]
export default routers;
