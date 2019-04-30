/**
 * Intro component
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link as LinkTo } from "react-scroll";

import Typing from 'react-typing-animation';

import styles from "./intro.module.scss"
import { rhythm } from "../utils/typography"

function Intro() {
    return (
    <StaticQuery
    query={introQuery}
    render={data => {
  return (
    
        <div class="intro"
          
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
          
          <div class="blue-line"></div>
          <div class="yellow-line"></div>
            <div>
            
              <div class="mobile-only mobile-photo right">
              <Image
              fixed={data.phoneMobile.childImageSharp.fixed}
              alt='Fell like Pro'
            />
              </div>
                <h1 className={styles.text}>
                     For the
                     everyday
                     player
                     {/* <Typing>               
                      Everyday
                      <Typing.Delay ms={1500} /> 
                      <Typing.Backspace count={8} />
                      <Typing.Delay ms={500} />
                      Local
                      <Typing.Delay ms={600} />
                      <Typing.Backspace count={8} />
                      <Typing.Delay ms={500} />
                      Amature
                      <Typing.Delay ms={800} />
                      <Typing.Backspace count={7} />
                      <Typing.Delay ms={500} />
                      Regular
                      <Typing.Delay ms={600} />
                      <Typing.Backspace count={8} />
                      <Typing.Delay ms={500} />
                      Pro
                      <Typing.Delay ms={900} />
                      <Typing.Backspace count={3} />
                      <Typing.Delay ms={500} />
                      Everyday
                    </Typing>  */}
                    
                </h1>
                <LinkTo
                  to='vision'
                  spy={true} smooth={true} offset={-25} duration={500}
                >
                  <Image
                  className={styles.appDownloadButton}
                  fixed={data.iosButton.childImageSharp.fixed}
                  alt='iosButton'
                  />
                </LinkTo>

                <LinkTo
                  to='vision'
                  spy={true} smooth={true} offset={-25} duration={500}
                >
                  <Image
                    fixed={data.androidButton.childImageSharp.fixed}
                    alt='iosButton'
                  />
                </LinkTo>
            </div>
                  
            <div class="desktop-only" style={{
                        width: 632,
                        textAlign: "right"
                       }}
            >
            <Image
              fixed={data.phone.childImageSharp.fixed}
              alt='Fell like Pro'
            />
            </div>
          </div>
    )  
}} />
)
}

const introQuery = graphql`
  query IntroQuery {
    
    phone: file(absolutePath: { regex: "/phone_feel_like_pro.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    phoneMobile: file(absolutePath: { regex: "/phone_feel_like_pro.png/" }) {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    iosButton: file(absolutePath: { regex: "/iosButton.png/" }) {
      childImageSharp {
        fixed(width: 151, height: 45) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    androidButton: file(absolutePath: { regex: "/androidButton.png/" }) {
      childImageSharp {
        fixed(width: 151, height: 45) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Intro
