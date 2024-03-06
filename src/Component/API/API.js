import React, { useState } from "react";
import axios from "axios";
import "./API.css";

function UserConverter() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://currency-converter-pro1.p.rapidapi.com/convert",
      params: {
        from: e.target.from.value,
        to: e.target.to.value,
        amount: e.target.amount.value,
      },
      headers: {
        "X-RapidAPI-Key": "ea4468212cmshed32a43ece025b9p1beb37jsnd5fd58e22d5e",
        "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="currencyForm">
      <div className="container">
        <h1>Currency Converter</h1>
        <form className="labelHidden" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="from">From</label>
            <input
              placeholder="Enter cc with currency. (EX. JOD, USD)"
              type="text"
              id="from"
              name="from"
            ></input>
          </div>
          <div>
            <label htmlFor="to">To</label>
            <input
              placeholder="Enter cc with currency. (EX. JOD, USD)"
              type="text"
              id="to"
              name="to"
            ></input>
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              placeholder="Enter currency amount"
              type="number"
              id="amount"
              name="amount"
            ></input>
          </div>
          <div className="button">
            <button type="submit">Convert</button>
          </div>
        </form>
        {result && (
          <p className="result">
            <span>Result:</span> {result}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserConverter;
