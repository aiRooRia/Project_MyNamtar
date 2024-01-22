import {
  Header,
  Profile,
  About,
  Skill,
  Experience,
  Work,
  GetInTouch,
  Footer,
} from "@/components/layout/Index";
import { serverHooks } from "next/dist/server/app-render/entry-base";
import React, { useRef } from "react";

const Home = () => {
  const sharedRef = useRef(null);
  return (
    <div className="flex flex-col items-center ">
      <Header refProp={sharedRef} />
      <Profile />
      <About refProp={sharedRef} />
      <Skill />
      <Experience />
      <Work refProp={sharedRef} />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
