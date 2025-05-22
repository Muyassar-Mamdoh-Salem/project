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
import Sign from "./pages/Sign";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import Shop from "./components/Shop";
import About from "./components/About";
import Categories from "./components/Categories";
import Regpage from "./pages/Regpage";
import ProductDetails from "./components/ProductDetails";
import { ProductsData } from "./api/Api";

const Layout = () => {


 

  return (
    <>
      <Header />
      <Outlet /> {/* سيتم استبداله بالمحتوى حسب المسار */}
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={ProductsData} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="sign" element={<Sign />} />
        <Route path="shop" element={<Shop />} />
        <Route path="F" element={<Footer />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="categories" element={<Categories />} />
                  <Route path="regpage" element={<Regpage />} />

      </>
    ),
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      },
    }
  );

  return <RouterProvider router={router} />;
};

export default App;
