import React from "react"
import PropTypes from "prop-types";
import Image from "gatsby-image"

class Slide extends React.Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const phone = this.props.phone;
    
    return (
        <div class="container">
            <div class="half slide-text">
                <h2>{title}</h2>
                <p>{text}</p>  
            </div>
            <div class="half phone-box">
                
            </div>
        </div>
    )
  }
}

Slide.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.any,
}


export default Slide
