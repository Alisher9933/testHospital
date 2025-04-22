
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavbarLayout from './Layout/Navbar/Navbar'
import About from  "./Pages/AboutPage/AboutPage"
import Doctors from "./Pages/DoctorsPage/DoctorsPage";
import Departments from "./Pages/DepartmentsPage/DepartmentsPage"
import Contact from "./Pages/ContactPage/ContactPage"
import MainBox from './Layout/MainBox/MainBox';


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarLayout/>,
      children: [
        {
          index: true,
          element: <MainBox/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/doctors",
          element: <Doctors/>
        },
        {
          path: "/departments",
          element: <Departments/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        // {
        //   path: "/about/:id",
        //   // path: "/about/:title" bu ham title uchun url ochishga kerak,
        //   element: <DetailPages/>
        // }
      ]
    }
  ])

  return (
    
    <div className='appdiv'>
      <header>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </header>
      
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
