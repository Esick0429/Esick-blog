import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {router} from './route'
import * as ElIconModules from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}
app.use(router)
router.isReady().then(() => app.mount('#app'))
