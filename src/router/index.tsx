import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import ErrorPage from '@/pages/error-page'

const Discover = lazy(() => import('@/pages/discover'))
const Recommend = lazy(() => import('@/pages/discover/recommend'))
const Toplist = lazy(() => import('@/pages/discover/toplist'))
const Playlist = lazy(() => import('@/pages/discover/playlist'))
const Djradio = lazy(() => import('@/pages/discover/djradio'))
const Artist = lazy(() => import('@/pages/discover/artist'))
const Album = lazy(() => import('@/pages/discover/album'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '', element: <Navigate to="recommend" /> },
      { path: 'recommend', element: <Recommend /> },
      { path: 'toplist', element: <Toplist /> },
      { path: 'playlist', element: <Playlist /> },
      { path: 'djradio', element: <Djradio /> },
      { path: 'artist', element: <Artist /> },
      { path: 'album', element: <Album /> },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]

export * from './config'
