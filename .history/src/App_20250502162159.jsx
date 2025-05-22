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
      <Outlet /> {/* سيتم استبداله بالمحتوى المناسب بناءً على المسار */}
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          {/* الصفحة الرئيسية */}
          <Route id="top" index element={<Home />} loader={ProductsData} />
          {/* صفحة السلة */}
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* صفحة تسجيل الدخول */}
        <Route path="sign" element={<SignIn />} />
        {/* صفحة المتجر */}
        <Route path="shop" element={<Shop />} />
        {/* صفحة عن */}
        <Route path="about" element={<About />} />
        {/* صفحة تفاصيل المنتج بناءً على الـ ID */}
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="" />
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
