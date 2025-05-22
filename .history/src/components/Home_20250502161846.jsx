import React from "react";
import Products from '../pages/Products';
import Banner from '../pages/Banner';

const Home = () => {
  return (
    <div id="top" className="bg-gray-100">
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
