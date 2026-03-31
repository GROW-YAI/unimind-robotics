import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Landing = React.lazy(() => import('./pages/landing'));
const AboutUs = React.lazy(() => import('./pages/about'));
const Product = React.lazy(() => import('./pages/product'));
const EducationResources = React.lazy(() => import('./pages/education'));
const Contact = React.lazy(() => import('./pages/contact'));
const Gallery = React.lazy(() => import('./pages/gallery'));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AppLayout from './components/appLayout';



function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/our-product", element: <Product /> },
        { path: "/education&resources", element: <EducationResources /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/gallery", element: <Gallery /> },
      ],
    },
  ]);

return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
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
