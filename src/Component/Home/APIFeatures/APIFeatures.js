import React from "react";
import "./APIFeatures.css";
import { Link } from "react-router-dom";

function APIFeatures() {
  return (
    <div className="apiFeatures">
      <div className="container">
        <h1>Embark on a Journey of Convenience</h1>
        <div>
          <p>
            "Royal Hotels is a prestigious hotel chain renowned for its
            luxurious accommodations and exceptional hospitality services
            worldwide. One of the standout features of Royal Hotels is its
            innovative currency conversion service, allowing guests to
            seamlessly exchange money between two currencies within the
            Royal-Features."
          </p>
          <div className="mylink">
            <Link to="/royalFeatures">Go to Currency Exchange</Link>
          </div>
        </div>
        {/* container end */}
      </div>
    </div>
  );
}

export default APIFeatures;
