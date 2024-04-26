import React, { Component } from 'react';

class CustomComponent extends Component {
    componentDidMount() {
        var featuredButton = document.getElementById("features-button");
        var bookHostelButton = document.getElementById("book-hostel-button");
        var homeButton = document.getElementById("home-button");
        var aboutButton = document.getElementById("about-button");
        featuredButton.addEventListener("click", () => {
            homeButton.classList.remove("active");
            aboutButton.classList.remove("active");
            featuredButton.classList.add("active");
        });
        homeButton.addEventListener("click", () => {
            featuredButton.classList.remove("active");
            aboutButton.classList.remove("active");
            homeButton.classList.add("active");
        });
        aboutButton.addEventListener("click", () => {
            homeButton.classList.remove("active");
            featuredButton.classList.remove("active");
            aboutButton.classList.add("active"); 
        });
    }

  render() {
    return (
      <div>
        {/* Your JSX code for the component */}
      </div>
    );
  }
}

export default CustomComponent;