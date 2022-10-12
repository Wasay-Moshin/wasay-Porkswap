import React from "react";
import Hero from "../Components/Elements/Hero";
import Seen from "../Components/Elements/Seen";
import Features from "../Components/Elements/Features";
import Coins from "../Components/Elements/Coins";
import Work from "../Components/Elements/Work";
import Interface from "../Components/Elements/Interface";
import Utilities from "../Components/Elements/Utilities";
import Comparison from "../Components/Elements/Comparison";
import Roadmap from "../Components/Elements/Roadmap";
import Faqs from "../Components/Utils/Faqs";
function Home() {
  return (
    <div>
      <Hero />
      <Seen/>
      <Features/>
      <Coins/>
      <Work/>
      <Interface/>
      <Utilities/>
      <Comparison/>
      <Roadmap/>
      <Faqs/>
    </div>
  );
}

export default Home;
