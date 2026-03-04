import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import UserProvider from './Contexts/UserProvider.jsx'
import { router } from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
