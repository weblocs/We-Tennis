import React from "react"

import styles from "../components/socials.module.scss"

import facebook from "./images/facebook.png"
import insta from "./images/insta.png"
import email from "./images/email.png"

class Slide extends React.Component {
  render() {
    
    return (
        <div className={styles.socialIcons}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
            <div>
                <img src={insta} alt="Instagram" />
            </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:info@wetennis.app">
            <div>
                <img src={email} alt="Email Me" />
            </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
            <div>
                <img src={facebook} alt="Facebook" />
            </div>
            </a>
        </div>
    )
  }
}

export default Slide
