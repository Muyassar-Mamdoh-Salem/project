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
import SignIn from "./pages/SignIn";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import Shop from "./components/Shop";
import About from "./components/About";
import { ProductsData } from "./api/Api";
import "./index.css";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

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
        <Route path="sign" element={<SignIn />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="About" element={<About />}/>
        <Route path="product/:id" element={<ProductctDetails />}/>
        
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
