import React, { Component, MouseEvent } from 'react';
import logor from "./img/logo-yellow-right.png"; // Tell webpack this JS file uses this image
import logol from "./img/logo-yellow-left.png"; // Tell webpack this JS file uses this image

class CloudamiteTop extends React.Component {

    render() {
        return(
            <div className="cloudamite-logo-top">
                  <div className="logo-top-left">
                    '  <img src={logol} alt="Logol" />;
                  </div>
                  <div className="logo-top-right">
                  <img src={logor} alt="Logo" />; 
                  </div>
        </div>
      );
    }
  
    
}

export default CloudamiteTop;