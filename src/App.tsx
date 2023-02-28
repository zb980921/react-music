import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { Footer, Header } from './layout'
import { routes } from './router'

const App = () => {
  return (
    <>
    <Header />

    <Suspense fallback="加载中">
      {useRoutes(routes)}
    </Suspense>

    <Footer />
    </>
  )
}

export default App
