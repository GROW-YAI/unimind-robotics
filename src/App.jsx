import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';
import AboutUs from './pages/about';
import Product from './pages/product';
import EducationResources from './pages/education';
import Contact from './pages/contact';
import Gallery from './pages/gallery';





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/our-product",
      element: <Product/>,
    },
    {
      path: "/education&resources",
      element: <EducationResources/>,
    },
    {
      path: "/contact-us",
      element: <Contact/>,
    },
    {
      path: "/gallery",
      element: <Gallery/>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
