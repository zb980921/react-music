import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'normalize.css'
import '@/assets/css/reset.scss'

import 'virtual:svg-icons-register'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h3>加载中...</h3>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
