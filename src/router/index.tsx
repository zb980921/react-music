import { Navigate, createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from '@/App'
import ErrorPage from '@/pages/error-page'
import Discover from '@/pages/discover'

const Recommend = lazy(() => import('@/pages/discover/recommend'))
const Toplist = lazy(() => import('@/pages/discover/toplist'))
const Playlist = lazy(() => import('@/pages/discover/playlist'))
const Djradio = lazy(() => import('@/pages/discover/djradio'))
const Artist = lazy(() => import('@/pages/discover/artist'))
const Album = lazy(() => import('@/pages/discover/album'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to="discover" />,
      },
      {
        path: 'discover',
        element: <Discover />,
        children: [
          {
            path: '',
            element: <Navigate to="recommend" />,
          },
          {
            path: 'recommend',
            element: <Recommend />,
          },
          {
            path: 'toplist',
            element: <Toplist />,
          },
          {
            path: 'playlist',
            element: <Playlist />,
          },
          {
            path: 'djradio',
            element: <Djradio />,
          },
          {
            path: 'artist',
            element: <Artist />,
          },
          {
            path: 'album',
            element: <Album />,
          },
        ],
      },
    ],
  },
])
