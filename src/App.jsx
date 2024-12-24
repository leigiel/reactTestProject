import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./Main/Main"
import Apply from "./Components/Apply/Apply"
import Blog from "./Components/Blog/Blog"
import Home from "./Components/Home/Home"


function App() {
 const router = createBrowserRouter([
  {
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/apply',
      element:<Apply></Apply>
    },
    {
      path:'/blogs',
      element:<Blog></Blog>
    },
  ]
 }
])

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
