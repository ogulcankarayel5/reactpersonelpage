import React, { Component } from "react";
import Makale from "./props/makale";
import "./css/blog.css";

export default class Blog extends Component {
render() {
    const articles=[
      {
        title:"blog1",
        content:"loremlorem",
        time:"Last updated 3 mins ago"
      },
      {
        title:"blog2",
        content:"loremlorem",
        time:"Last updated 6 mins ago"
      },
      {
        title:"blog3",
        content:"loremlorem",
        time:"Last updated 90 mins ago"
      }
    
    ];

    return (
      <div id="blog" className="container">
        <Makale articles={articles}/>
      </div>
      
    );
  }
}
