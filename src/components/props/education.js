import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Education extends Component {
  static propTypes = {
    education:PropTypes.shape({
      startYear:PropTypes.number,
      endYear:PropTypes.number
    })
  };

  render() {

    const {startYear,endYear}=this.props.education;
    const baslamaYili="Başlama Yılı";
    const bitisYili="Bitiş Yılı";
    return (
      
        <div className="row">
          <div className="col-4 col-md-3">
            <p>{baslamaYili}-{bitisYili}</p>
            
          </div>
          <div className="col-4 col-md-3 ">
            <p>{startYear}-{endYear}</p>
          
          </div>
        
        
        
        </div>
      
    )
  }
}
