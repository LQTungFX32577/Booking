

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import { Layout } from './AdminHome/Layout'
import { Login } from './AdminHome/Login'
import { DashBoard } from './AdminHome/OutLetContent/DashBoard'
import { User } from './AdminHome/OutLetContent/User'
import { Hotel } from './AdminHome/OutLetContent/Hotel'
import { Room } from './AdminHome/OutLetContent/Room'
import { NewRoom } from './AdminHome/OutLetContent/NewRoom'
import { NewHotel } from './AdminHome/OutLetContent/NewHotel'
import { Transaction } from './AdminHome/OutLetContent/Transaction'
import { EditHotel } from './AdminHome/OutLetContent/EditHotel'
import { EditRoom } from './AdminHome/OutLetContent/EditRoom'
import { RestoreHotel } from './AdminHome/OutLetContent/RestoreHotel'
import { RestoreRoom } from './AdminHome/OutLetContent/RestoreRoom'

function App() {
   const router = createBrowserRouter([
    {path: "/", element:<Login/>},
    {path: "/home", element:<Layout/>, children: [
      {index: true, element:<DashBoard/>},
      {path:"user", element:<User/>},
      {path:"hotel", element:<Hotel/>},
      {path:"room", element:<Room/>},
      {path:"hotel-restore", element:<RestoreHotel/>},
      {path:"room-restore", element:<RestoreRoom/>},
      {path:"transaction", element:<Transaction/>},
      {path:"new-room", element:<NewRoom/>},
      {path:"new-hotel", element:<NewHotel/>},
      {path:"edit-hotel/:hotelId", element:<EditHotel/>},
      {path:"edit-room/:roomId", element:<EditRoom/>},
      
    ]}
   ])
  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

export default App
