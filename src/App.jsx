import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Layout from './layout/Layout'
import Orders from './pages/orders/Orders'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Add from './pages/add/Add'
import MyGigs from './pages/myGigs/MyGigs'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
