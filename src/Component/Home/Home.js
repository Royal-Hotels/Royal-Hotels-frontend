import "./Home.css";
import Welcome from "./Welcome/Welcome";
import SectionB from "./SectionB/SectionB";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Welcome />
      <SectionB />
    </>
  );
}
export default Home;
