import React from "react";

import logo from "../assets/logo.svg";
import LoginButton from "./LoginButton.js";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="quantum-one logo" width="240" />
    <h1 className="mb-4">Verify your ID, create a Quantum One account, receive DA-FI </h1>

    <p className="lead">
      Get started here <a href="https://fractal.id/authorize?client_id=rZ0cAmPpY2SPgF4bXqBrzndqoTzk1EYsq4RtQ1fNhe0&redirect_uri=https%3A%2F%2Fquantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      target="_blank" rel="noreferrer">
      Verify ID
    </a>
    </p>
    <LoginButton />
  </div>
);

export default Hero;
