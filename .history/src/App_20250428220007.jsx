import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import { ProductsData } from "./api/Api";
import SignIn from "./components/SignIn"; // استيراد SignIn
import "./index.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={ProductsData} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="signIn" element={<SignIn />} /> {/* هنا تم استدعاء SignIn */}
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      },
    }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
