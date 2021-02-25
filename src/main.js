import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "element-ui/lib/theme-chalk/index.css"
import ElementUI from "element-ui"
import './styles/index.scss'
import htmlToPdf from "@c/htmlToPdf"
// import Print from "vue-print-nb"

// 使用 Event Bus  事件总线
const bus = new Vue();
Vue.prototype.$bus = bus

Vue.config.productionTip = false


Vue.use(ElementUI)

Vue.use(htmlToPdf)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
