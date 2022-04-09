import { createApp } from 'vue'
import App from './App.vue'
import {router} from './route'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
router.isReady().then(() => app.mount('#app'))
