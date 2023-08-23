import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './plugins/element.js'
import installElementPlus from './plugins/element'
import pinia from './stores/index.js'
import 'assets/style/index.scss'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(pinia).mount('#app')
