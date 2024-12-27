import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./Main/Main"
import Apply from "./Components/Apply/Apply"
import Blog from "./Components/Blog/Blog"
import Home from "./Components/Home/Home"
import ErrorPage from "./Components/ErrorPage/ErrorPage"
import JobDetails from "./Components/Jobs/JobDetails"


function App() {
 const router = createBrowserRouter([
  {
  path:'/',
  element:<Main></Main>,
  errorElement:<ErrorPage></ErrorPage>,
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
    {
      path:'/jobs/:jobId',
      element:<JobDetails></JobDetails>,
      loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`)
    }
  ]
 }
])

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
