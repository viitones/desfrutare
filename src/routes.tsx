import { createBrowserRouter } from 'react-router-dom'
import { InitialPage } from './pages/Initial-page'
import { Judo } from './pages/judo'
import { Transparence } from './pages/transparence'
import { Volei } from './pages/volei'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage />,
  },

  {
    path: '/judo',
    element: <Judo />,
  },

  {
    path: '/volei',
    element: <Volei />,
  },

  {
    path: '/transparence',
    element: <Transparence />,
  },

  {
    path: '*',
    element: <InitialPage />,
  }
    
])