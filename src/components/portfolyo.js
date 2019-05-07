import React, { Component } from "react";

import "./css/portfolyo.css";

export default class Portfolyo extends Component {
  render() {
    return (
      <div className="container" id="portfolyo">
        <div className="row">
          <div className="col-md-5 col-lg-6">
            <div className="portfolyo-item">
              <img
                className="img-fluid d-block"
                src="https://onas.wpcdn.pl/img/wpogimage.png?ts=1543"
                style={{ width: "100%" }}
              />
              <div className="img-overlay" style={{ width: '100%' }}>
                <div className="icon">
                  <i class="fas fa-search fa-3x" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
