import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import Axios from 'axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

Axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

const app = createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
  