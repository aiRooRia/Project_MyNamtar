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

const Home = () => {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <Profile />
      <About />
      <Skill />
      <Experience />
      <Work />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
