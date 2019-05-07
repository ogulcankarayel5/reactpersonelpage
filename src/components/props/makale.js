import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Makale extends Component {
  static propTypes = {
    articles: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  };
  render() {
    return (
      
        <div class="card-group">
          {this.props.articles.map(article => {
            return (
              <div class="card bg-warning mr-2" style={{ width: "18rem" }}>
              
                <div class="card-body">
                  <h5 class="card-title">{article.title}</h5>
                  <p class="card-text">{article.content}</p>
                </div>

                <div class="card-body">
                  <a href="#" class="card-link">
                    Read More
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">{article.time}</small>
                </div>
              </div>
            );
          })}
        </div>
      
    );
  }
}
