import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Browse from '../components/Browse';
import Login from '../components/Login';
import Home from '../components/Home';


const Index = () => {

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
      },
  {
    path:"/login",
    element:<Login/>
  },
  {
     path:"/browse",
     element:<Browse/>
  }
])

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Index
