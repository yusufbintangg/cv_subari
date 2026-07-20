import { ViteSSG } from 'vite-ssg'
import { createUnhead } from '@unhead/vue'
import App from './app/App.vue'
import KotaLanding from './app/KotaLanding.vue'
import './styles/index.css'

const routes = [
  { path: '/', component: App },
  { path: '/sedot-wc-:slug', component: KotaLanding },
]

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createUnhead())
  },
)
