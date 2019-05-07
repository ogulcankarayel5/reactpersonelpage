import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
     
          <div id="contact-form" className="col-10 col-md-6 col-lg-5">
            <h2 className=" d-flex justify-content-center">Contact Me</h2>
            <form method="post">
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-user text-info" />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Lütfen isminizi yazın"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-envelope text-info" />
                    </div>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email adresinizi girin"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-comment text-info" />
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    placeholder="Lütfen mesajını girin"
                    required
                  />
                </div>
              </div>

              <div className=" d-flex justify-content-start">
                <input
                  type="submit"
                  value="Gönder"
                  className="btn btn-info rounded-3 py-2"
                />
              </div>
            </form>
          </div>
       
    );
  }
}
