import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 第一步  npm install fastclick --save
// 第二步:导入fastclick  解决移动端点击延迟300ms的问题
import FastClick from 'fastclick'


// 安装组件插件
// import toast from './components/common/toast'
// Vue.use(toast)

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
// 第三步:attach
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
