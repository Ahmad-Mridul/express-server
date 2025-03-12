import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Cards from './Components/Cards.jsx'
import SinglePhone from './Components/SinglePhone.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Cards></Cards>
      },
      {
        path:'/mobiles/:id',
        element:<SinglePhone></SinglePhone>,
        loader:({params})=>fetch(`http://localhost:3000/mobiles/${params.id}`)
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
