import React from "react";
import Hero from "../Components/Hero";
import Quote from "../Components/Quote";
import Network from "../Components/Network";
import Focus from "../Components/Focus";
import Services from "../Components/Services";
import Concept from "../Components/Concept";
import CoFound from "../Components/CoFound";
import Equity from "../Components/Equity";
import Blog from "../Components/Blog";
import Featured from "../Components/Featured";
import Banner from "../Components/Banner";
import Studio from "../Components/Studio";
import Investor from "../Components/Investor";
import Join from "../Components/Join";

const Home = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Network />
      <Focus />
      <Concept />
      <Services />
      {/* <Studio /> */}
      <CoFound />
      <Join />
      <Investor />
      <Equity />
      <Blog />
      <Featured />
      <Banner />
    </div>
  );
};

export default Home;
