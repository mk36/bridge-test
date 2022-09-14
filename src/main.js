import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
import 'animate.css';

import './styles/styles.scss'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.use(Toast, {});

app.config.globalProperties.$filters = {
  capitalizeFirstLetter(value) {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : ''
  },
  currency(value) {
    return value ? `£${value.toFixed(2)}` : '£0.00'
  }
}
