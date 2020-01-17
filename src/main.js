import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.use(ElementUI)
Vue.use(FormMaking)
Vue.use(ant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
