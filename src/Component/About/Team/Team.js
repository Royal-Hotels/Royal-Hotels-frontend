import "./Team.css";
import boypic from "./assets/boy.jpg";
import manpic from "./assets/man.jpg";
import girlpic from "./assets/girl.jpg";
import programmer from "./assets/programmer.jpeg";
import data from "./TeamData/TeamData.json";
import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <div className="team-members">
        <h1>Our Team</h1>
        <div className="container">
          {data.TeamMembers.map((memeber) => {
            return (
              <div class="box">
                <img src={programmer} alt="No Img!" />
                <div class="info">
                  <h3>{memeber.name}</h3>
                  <p>{memeber.Education}</p>
                </div>
                <div class="icons">
                  <Link to="">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="">
                    <i class="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="">
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to={memeber.gitHubLink} target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Team;
