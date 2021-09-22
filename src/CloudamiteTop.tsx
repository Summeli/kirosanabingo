import React, { Component, MouseEvent } from 'react';
import logoright from "./img/clouda-logo-right.png"; // Tell webpack this JS file uses this image
import logoline from "./img/logo-line.png"; // Tell webpack this JS file uses this image

class CloudamiteTop extends React.Component {

    render() {
        return(
            <div className="cloudamite-logo-footer">
                  <div className="logo-top-left">
                    <img src={logoline} alt="Logol" />;
                  </div>
                  <div className="logo-top-right">
                  <img src={logoright} alt="Logol"/>
                  </div>
        </div>
      );
    }
  
    
}

export default CloudamiteTop;