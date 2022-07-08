import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ConfigProvider } from 'vant';


import App from './App.vue'
import V_Login from './V_Login.vue'
import V_Dashboard from './V_Dashboard.vue'
import V_Sim from './V_Sim.vue'
import V_Wifi from './V_Wifi.vue'
import V_DHCP from './V_DHCP.vue'
import V_Protect from './V_Protect.vue'
import V_Pin from './V_Pin.vue'
import V_Device from './V_Device.vue'
import V_Manage from './V_Manage.vue'
import V_Password from './V_Password.vue'

const routes = [
  { path: '/', component: V_Dashboard },
  { path: '/login', component: V_Login },
  { path: '/sim', component: V_Sim },
  { path: '/dhcp', component: V_DHCP },
  { path: '/wifi', component: V_Wifi },
  { path: '/protect', component: V_Protect },
  { path: '/pin', component: V_Pin },
  { path: '/device', component: V_Device },
  { path: '/manage', component: V_Manage },
  { path: '/password', component: V_Password },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router)
  .use(ConfigProvider)
  .mount('#app')
