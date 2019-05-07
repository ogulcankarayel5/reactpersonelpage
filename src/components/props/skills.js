import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Skills extends Component {
  static propTypes = {
    skills:PropTypes.shape({
      skill:PropTypes.string,
      variant:PropTypes.string,
      progress:PropTypes.number
    })
  };

  render() {

    
    return (
      <div id="skills">
        {this.props.skills.map(skills => (
          <div className="row" id="skills">
            <div className="col-4 col-md-2" style={{ display: "flex" }}>
              <p>{skills.skill}</p>
            </div>
            <div className="col-8 col-md-10 d-flex justify-content-center">
              <ProgressBar
                variant={skills.variant}
                now={skills.progress}
                style={{ width: "75%", margin: "auto" }}
                
              />
              <p id="progress">{`${skills.progress}%`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

