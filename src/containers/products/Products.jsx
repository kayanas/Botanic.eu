import React from "react";
import { Feature } from "../../components";
import {
  medus,
  medausSkanestas1,
  medausSkanestas2,
  medausSkanestas3,
  medausSkanestas4,
} from "./imports.js";

import "./products.css";

const Features = () => {
  return (
    <div className="botanic__features section__padding" id="products">
      <div className="botanic__features-heading">
        <h1 className="gradient__text">Products</h1>
      </div>
      <div className="botanic__features-products-container">
        <div className="botanic__features-container">
          <Feature title={"Medus"} />
          <img src={medus} alt="medus" />
        </div>
        <div className="botanic__features-container">
          <Feature title={"Medaus skanestas su liofelizuotom avietem"} />
          <img src={medausSkanestas1} alt="medausSkanestas" />
        </div>
        <div className="botanic__features-container">
          <Feature title={"Medaus skanestas su saltalankiais"} />
          <img src={medausSkanestas2} alt="medausSkanestas" />
        </div>
        <div className="botanic__features-container">
          <Feature title={"Medaus skanestas su liofelizutom vysniom"} />
          <img src={medausSkanestas3} alt="medausSkanestas" />
        </div>
        <div className="botanic__features-container">
          <Feature title={"Medus su propoliu"} />
          <img src={medausSkanestas4} alt="medausSkanestas" />
        </div>
      </div>
    </div>
  );
};

export default Features;
