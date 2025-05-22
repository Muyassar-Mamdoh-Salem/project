import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route id="top" index element={<Home />} loader={ProductsData} />
          <Route path="cart" element={<Cart />} />
          <Route path="Regpage" element={<Regpage />} />
        </Route>

        <Route path="sign" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="categories" element={<Categories />} />

        {/* مسار الـ 404 - صفحة الخطأ */}
        <Route path="*" element={<NotFound />} />
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
