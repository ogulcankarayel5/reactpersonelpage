import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class ContactPersonel extends Component {
  render() {
    return (
      <div  className="col-8 col-md-8 col-lg-6" id="contact-personel">
        <p className="d-flex justify-content-center">Telefon 05413667800</p>
        <div className="icons">
            <a href="https://github.com/ogulcankarayel5/" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://tr.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    )
  }
}
