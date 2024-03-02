import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Message from "./pages/message/Message";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/lesson/123",
          element: <Gig />,
        },
        {
          path: "/mylessons",
          element: <MyGigs />,
        },
        {
          path: "/lessons",
          element: <Gigs />,
        },
        {
          path: "/bookedlessons",
          element: <Orders />,
        },
        {
          path: "/inbox",
          element: <Message />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
