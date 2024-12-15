import { createBrowserRouter } from 'react-router-dom'
import { InitialPage } from './pages/Initial-page'
import { Transparence } from './pages/transparence'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage />,
  },

  {
    path: '/transparence',
    element: <Transparence />
  }
    
])