import ReactDOM from 'react-dom/client'
import 'normalize.css'
import '@/assets/css/reset.scss'

import 'virtual:svg-icons-register'
import { HashRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
