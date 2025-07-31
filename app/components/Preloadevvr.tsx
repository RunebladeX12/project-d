import React from 'react';
import { useEffect } from 'react';


const Preloader: React.FC = () => {

  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default Preloader;
