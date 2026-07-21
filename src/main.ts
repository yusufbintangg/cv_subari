import { ViteSSG } from 'vite-ssg'
import { createUnhead } from '@unhead/vue'
import AppRoot from './AppRoot.vue'
import App from './app/App.vue'
import KotaLanding from './app/KotaLanding.vue'
import './styles/index.css'

const routes = [
  { path: '/', component: App },
  { path: '/sedot-wc-:slug', component: KotaLanding },
]

export const createApp = ViteSSG(
  AppRoot,
  {
    routes,
    scrollBehavior(to) {
      if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
      }
      return { top: 0 }
    },
  },
  ({ app }) => {
    app.use(createUnhead())
  },
)