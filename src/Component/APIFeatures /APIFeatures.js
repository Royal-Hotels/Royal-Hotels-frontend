
import React from 'react';

function APIFeatures(){
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card position-relative" style={{ width: '900px', height: '350px' }}>
           {/* Header */}
           <div className="header-container text-center mb-3">
          <h5 className="card-title font-weight-bold mb-0" style={{ borderBottom: 'none', marginTop: '-60px' }}>
            Embark on a Journey of Convenience
          </h5>
        </div>
        <img
        //   src="money.jpeg"
          alt="Card image"
          className="card-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(2px)', // Adjust the value for the desired level of blur
          }}
        />

        {/* Text and Button Overlay */}
        <div className="card-img-overlay text-dark d-flex flex-column justify-content-end">

          <p className="card-text" style={{ color: 'black', fontWeight: 'bold' }}>
            "Embark on a journey of unparalleled convenience with our hotel's cutting-edge Currency Exchange feature,
            meticulously designed for seamless transactions directly on our website. Elevate your overall experience by
            effortlessly converting currencies at your fingertips, all from the comfort of your own space. Whether you're
            a globetrotter planning your next adventure or a business traveler managing expenses, our user-friendly platform
            makes currency conversion a breeze. At [Your Hotel Website], we prioritize making every aspect of your journey
            smooth and enjoyable. Enhance your travel experience with the added convenience of our exclusive Currency Exchange
            feature, available only on our website, as we strive to redefine the art of comfort and sophistication for our valued guests."
          </p>
          <div className="text-center">
            {/* render API component */}
            <a href="your-conversion-page-url" className="btn btn-primary">Go to Currency Exchange</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIFeatures;
