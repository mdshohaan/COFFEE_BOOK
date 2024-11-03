import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner />
      <Heading
        title={"Browse Coffe By Category"}
        subtitle={"Choose your desired coffee"}
      />
      {/* Category Section*/}
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
