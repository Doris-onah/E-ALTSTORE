
import router from './router'
import {store} from "./store/store"
import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'




  

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
