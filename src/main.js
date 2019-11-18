/*
 * @Author: yhlyl
 * @Date: 2019-11-18 20:35:54
 * @LastEditTime: 2019-11-18 21:56:30
 * @LastEditors: yhlyl
 * @Description: 
 * @FilePath: /webwork/proj/src/main.js
 * @https://github.com/android-coco
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
