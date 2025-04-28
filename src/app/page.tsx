import React from "react";
import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import HeroSectionHeader from "./components/HeroSectionHeader";
function Home() {
  return (
    <div>
        <HeroSectionHeader />
        <h1 className="text-5xl font-extrabold dark:text-white text-center m-20">
          Latest Questions
        </h1>
        <LatestQuestions/>
        <h1 className="text-5xl font-extrabold dark:text-white text-center m-20">
          Top Contributers
        </h1>
        <TopContributers />
    </div>
  );
}

export default Home;
