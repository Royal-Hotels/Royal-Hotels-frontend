import "./Home.css";
import Welcome from "./Welcome/Welcome";
import SectionB from "./SectionB/SectionB";
import Service from "./Service/Service";
import SectionA from "./SectionA/SectionA";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Welcome />
      <SectionA />
      <SectionB />
      <Service />
    </>
  );
}
export default Home;
