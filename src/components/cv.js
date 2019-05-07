import React, { Component } from "react";
import "./css/cv.css";
import Personel from './props/personel';
import Skills from './props/skills';
import Education from './props/education';

class Cv extends Component {
  render() {
    const personel={
      birthDay:1998,
      birthPlace:"Çorum"
    };

    const skills=[
      {
        skill:"html",
        variant:"success",
        progress:90
      },

      {
        skill:"javascript",
        variant:"danger",
        progress:55
      },

      {
        skill:"css",
        variant:"warning",
        progress:80
      }

    ];

    const education={
      startYear:2017,
      endYear:2021
    };

    return (
      
        <div id="cv" className="container">
         <h1>Kişisel Bilgiler</h1>
          <Personel 
          personel={personel}
         />
         <h1>Yetkinlikler</h1>
         <Skills 
          skills={skills} 
        />
        <h1>Eğitim Bilgileri</h1>
        <Education
        education={education}
        />
         </div>
     
    );
  }
}
export default Cv;
