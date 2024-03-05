import "./Home.css";
import Welcome from "./Welcome/Welcome";
import SectionB from "./SectionB/SectionB";
import Service from "./Service/Service";
import SectionA from "./SectionA/SectionA";
import APIFeatures from "./APIFeatures/APIFeatures";

function Home() {
  return (
    <>
      <Welcome />
      <SectionA />
      <SectionB />
      <APIFeatures/>
      <Service />
    </>
  );
}
export default Home;
