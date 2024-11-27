import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyCreateRoute from './MyCreateRoute/MyCreateRoute'
import { RouterProvider } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={MyCreateRoute}></RouterProvider>
  </StrictMode>,
)
