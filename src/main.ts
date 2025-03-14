import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/app.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
