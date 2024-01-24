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
import { useRef } from "react";

const Home = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const aboutHandleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const workHandleClick = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contactHandleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col  sm:max-w-[1440px] sm:py-[96px] sm:px-[80px]">
      <Header
        aboutHandleClick={aboutHandleClick}
        workHandleClick={workHandleClick}
        contactHandleClick={contactHandleClick}
      />
      <Profile />
      <About aboutRef={aboutRef} />
      <Skill />
      <Experience />
      <Work workRef={workRef} />
      <GetInTouch />
      <Footer contactRef={contactRef} />
    </div>
  );
};

export default Home;
