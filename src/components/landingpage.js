import React, { Component } from "react";
import "./css/landingpage.css";

import LandingProps from './props/landingprops';

class LandingPage extends Component {
  render() {
   
    const name="İsİm";
    return (
      
        <div id="page" className="container">
           <LandingProps
            name={name}
            />
            
        </div>

    );
  }
}

export default LandingPage;
