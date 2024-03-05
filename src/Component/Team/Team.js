import "./Team.css";
import pic from "../Branches/branchPic/hotel.webp";
import data from "./TeamData/TeamData.json";

function Team() {
  return (
    <>
      <div className="Team--Container">
        {data.TeamMembers.map((memeber, index, array) => {
          return (
            <div className="Team--memeber--card">
              <img
                className="personal--photo"
                src={pic}
                alt="member--personal"
              ></img>
              <div className="basic--info">
                <h2>{memeber.name}</h2>
                <p>
                  <span className="light">{memeber.Education}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="bold">Interests:</span> {memeber.Interests}
                </p>
                <a
                  href={memeber.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Team;
