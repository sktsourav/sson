import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantPage from "./components/RestaurantPage";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        )
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);