import Landing from "./landing/Landing";
import LatestWork from "./latest-work/LatestWork";
import OurTeam from "./our-team/OurTeam";
import Services from "./services/Services";

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <LatestWork />
      <OurTeam />
    </>
  );
};

export default Home;
