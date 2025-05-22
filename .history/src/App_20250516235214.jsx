
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={ProductsData} />
          <Route path="cart" element={<Cart />} />
          <Route path="regpage" element={<Regpage />} />
        </Route>
        <Route path="sign" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="categories" element={<Categories />} />
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