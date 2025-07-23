import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const navs = createBrowserRouter([
    {
        path: '', element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'portfolio', element: <Portfolio /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <NotFound/> }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={navs}></RouterProvider>
)
