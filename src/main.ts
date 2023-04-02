import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globals from './global'
import 'vant/lib/index.css';

const app = createApp(App)
app.config.globalProperties.$globals = globals
app.use(store)
app.use(router)
app.mount('#app')

