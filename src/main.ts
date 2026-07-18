import { ViteSSG } from 'vite-ssg'
import App from './app/App.vue'
import './styles/index.css'

export const createApp = ViteSSG(
  App,
  { routes: [{ path: '/', component: App }] },
)