import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactForm from './props/contactform';
import ContactPersonel from './props/contactpersonel';
import "./css/contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container">
          <div className="row">
            <ContactForm/>
            <ContactPersonel/>
          </div>
         </div>
      ); 
    }
  }
