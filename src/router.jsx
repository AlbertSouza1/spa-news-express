
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Search from './pages/Search/Search.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import ErrorPage from './pages/Utils/ErrorPage.jsx'
import { Auth } from './pages/Auth/Auth.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { ManageNews } from './pages/News/ManageNews.jsx'
import { EditProfile } from './pages/Profile/EditProfile.jsx'

export const router = createBrowserRouter([
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
                path: "/manage-news/add",
                element: <ManageNews />
            },
            {
                path: "/manage-news/edit/:id",
                element: <ManageNews />
            },
            {
                path: "/profile/edit",
                element: <EditProfile />
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    }
]);