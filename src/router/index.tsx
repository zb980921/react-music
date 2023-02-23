import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/home'
import My from '@/pages/my'
import Friend from '@/pages/friend'
import Download from '@/pages/download'

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="my" element={<My />}></Route>
      <Route path="friend" element={<Friend />}></Route>
      <Route path="download" element={<Download />}></Route>
    </Route>,
  ),
)
