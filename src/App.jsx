import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';
import AboutUs from './pages/about';
import Product from './pages/product';
import EducationResources from './pages/education';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/our-product",
      element: <Product />,
    },
    {
      path: "/education&resources",
      element: <EducationResources />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="custom-toast"  
        progressClassName="custom-progress" 
      />

    </>
  )
}

export default App
