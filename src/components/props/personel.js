import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Personel extends Component {
  static propTypes = {
    personel: PropTypes.shape({
      birthDay: PropTypes.number,
      birthPlace: PropTypes.string
    })
  };

  render() {
    const { birthDay, birthPlace } = this.props.personel;
    const dogumTarihi = "Doğum Tarihi";
    const dogumYeri = "Doğum Yeri";
    return (
   
        
        <div className="row ">
          <div className="col-4 col-md-3">
            <p>{dogumTarihi}</p>
            <p>{dogumYeri}</p>
          </div>

          <div className="col-4 col-md-3">
            <p>{birthDay}</p>
            <p>{birthPlace}</p>
          </div>
        </div>
        
    );
  }
}
