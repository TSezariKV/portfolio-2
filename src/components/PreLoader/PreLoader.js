import React, { useEffect } from "react";
import { preLoaderAnim } from "./animation";
import './PreLoader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Editor,</span>
        <span>Creator.</span>
      </div>
    </div>
  );
};

export default PreLoader;