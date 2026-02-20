import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Search from './pages/Search/Search.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'
import ErrorPage from './pages/Utils/ErrorPage.jsx'
import { Auth } from './pages/Auth/Auth.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import UserProvider from './Contexts/UserProvider.jsx'
import { ManageNews } from './pages/News/ManageNews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/manage-news/:action",
        element: <ManageNews />
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
