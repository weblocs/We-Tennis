/**
 * IntroAbout component
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styles from "./intro.module.scss"
import { rhythm } from "../utils/typography"

function IntroAbout() {
    return (
    <StaticQuery
    query={introAboutQuery}
    render={data => {
  return (
    
        <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
          <div class="blue-line"></div>
          <div class="yellow-line"></div>

          
          <div class="mobile-only mobile-photo right">
              <Image
              fixed={data.phoneMobile.childImageSharp.fixed}
              alt='Fell like Pro'
            />
              </div>
            
              
            <div class="about-h1">
                <h1 style={{maxWidth: 1200, marginRight: 60 }} className={styles.text}>
                WELCOME TO THE FUTURE <div>OF TENNIS</div>
                </h1>
                
            </div>
                  
            <div class="desktop-only" style={{
                        width: 632,
                       }}
            >
            <Image
              fluid={data.phone.childImageSharp.fluid}
              alt='Fell like'
            />
            </div>
          </div>
    )  
}} />
)
}

const introAboutQuery = graphql`
  query introAbout {
    phone: file(absolutePath: { regex: "/about.png/" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
    }
    phoneMobile: file(absolutePath: { regex: "/about.png/" }) {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IntroAbout
