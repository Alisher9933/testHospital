import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavbarLayout from './Layout/Navbar/Navbar';
import About from './Pages/AboutPage/AboutPage';
import Doctors from './Pages/DoctorsPage/DoctorsPage';
import Departments from './Pages/DepartmentsPage/DepartmentsPage';
import Contact from './Pages/ContactPage/ContactPage';
import MainBox from './Layout/MainBox/MainBox';
import NotFoundPage from './NotFound/NotFound'; // Import NotFoundPage

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarLayout />,
      children: [
        {
          index: true,
          element: <MainBox />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/doctors",
          element: <Doctors />,
        },
        {
          path: "/departments",
          element: <Departments />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        // Catch-all route for undefined paths
        {
          path: "*", 
          element: <NotFoundPage />, 
        },
      ],
    },
  ]);

  return (
    <div className='appdiv'>
      <header>
        {/* Uncomment and configure authentication if needed */}
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </header>
      
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
