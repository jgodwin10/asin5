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

const Home = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Network />
      <Focus />
      <Concept />
      <Services />
      <CoFound />
      <Equity />
      <Blog />
    </div>
  );
};

export default Home;
