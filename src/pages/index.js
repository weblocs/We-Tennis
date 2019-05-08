import React from "react"

import { graphql } from "gatsby"
import Image from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionBlock from "../components/section"

import { rhythm } from "../utils/typography"
import "../styles/global.scss"

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 
import Intro from "../components/intro"
import Button from "../components/button"


import Menu from "../components/menuabout"

import TextLoop from "react-text-loop";

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }
  
  openForm() {
    this.typeformEmbed.typeform.open();
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Main Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <header>
            <Menu
                title="Title"
                link="/"
                menu={[`app`, `vision`, `about`, `contact`]}
            />
        </header>

        <Intro />

        <SectionBlock 
          id="app"
        >
            <h2>introducting the WeTennis app <span>🚀</span></h2>
            <h3>#TheATPForEverydayPlayers</h3>
            <p style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(32),
            }}>WeTennis is a mobile application that allows tennis players to track their matches and display their tennis career. No matter your age or ability, feel more like  
              <div></div>
                <TextLoop className={'typingNames'} interval={1000} fade>
                    <span>Roger Federer</span>
                    <span>Serena Williams</span>
                    <span>Novak Djokovic</span>
                    <span>Naomi Osaka</span>
                    <span>Rafa Nadal</span>
                    <span>Maria Sharapova</span>
                    <span>Juan Martín del Potro</span>
                    <span>Petra Kvitová</span>
                    <span>Andy Murray</span>
                    <span>Simona Halep</span>
                </TextLoop>  as you build up your stats and engage with your friends on tour.</p>

              
                 
                  <button className="btn"> become part of the community </button>
            
            
                  <Button
                      title="learn more about us"
                      link="/about"
                  />
            
        </SectionBlock>
        
        <SectionBlock 
          id="vision"
        >

          <div class="blue-line-2"></div>
          <div class="yellow-line-2"></div>

        <AliceCarousel 
            mouseDragEnabled
            autoPlayInterval={4000}
            duration={700}
            autoPlay={true}
            buttonsDisabled={true} 
            stopAutoPlayOnHover={false}
        >
            <div class="container">
                <div class="half slide-text">
                    <h2>STAY CONNECTED</h2>
                    <p style={{
                      maxWidth: rhythm(14),
                    }}>invite your tennis friends and keep updated on their tennis activity</p>  
                </div>
                <div class="half phone-box">
                    <Image
                      fluid={data.stay.childImageSharp.fluid}
                      alt='Fell like Pro'
                    />
                </div>
            </div>
            <div class="container">
                <div class="half slide-text">
                    <h2 style={{
                      maxWidth: rhythm(22),
                    }}>DISCOVER NEW PLAYERS</h2>
                    <p style={{
                      maxWidth: 360,
                    }}>search players and groups to interact with your local community</p>  
                </div>
                <div class="half phone-box">
                    <Image
                      fluid={data.discover.childImageSharp.fluid}
                      alt='Fell like Pro'
                    />
                </div>
            </div>

            <div class="container">
                <div class="half slide-text">
                    <h2>COMPARE HISTROY</h2>
                    <p style={{
                      maxWidth: 400,
                    }}>create long lasting rivalries with friends and compare histroy of matches played</p>  
                </div>
                <div class="half phone-box">
                    <Image
                      fluid={data.compare.childImageSharp.fluid}
                      alt='Fell like Pro'
                    />
                </div>
            </div>

            <div class="container">
                <div class="half slide-text">
                    <h2>COMPETE IN LEADERBOARDS</h2>
                    <p style={{
                      maxWidth: 445,
                    }}>create custom groups to gain and lose points, so you’ll have to fight to stay on top</p>  
                </div>
                <div class="half phone-box">
                    <Image
                      fluid={data.compete.childImageSharp.fluid}
                      alt='Fell like Pro'
                    />
                </div>
            </div>

            <div class="container">
                <div class="half slide-text">
                    <h2>DISPLAY<div></div> STATS</h2>
                    <p style={{
                      maxWidth: 460,
                    }}>see you track record and match stats<div></div> like win/loss ratio, tiebreak ratio and more</p>  
                </div>
                <div class="half phone-box">
                    <Image
                      fluid={data.display.childImageSharp.fluid}
                      alt='Fell like Pro'
                    />
                </div>
            </div>
            
        </AliceCarousel>
        </SectionBlock>
        
    
        
        <SectionBlock
        id="contact">
            <h2>get in touch <span>👋</span></h2>
            <h3>#GotQuestions</h3>
            <p style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(16),
            }}>
            To access our press kit or partner with us
            or even if it’s just to ask a question drop
            us an email at <a href="mailto:info@wetennis.app">info@wetennis.app</a>
            </p>
        </SectionBlock>
        
      </Layout>
    )
  }
}



export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    phone: file(absolutePath: { regex: "/phone_feel_like_pro.png/" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
    }
    stay: file(absolutePath: { regex: "/stay.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discover: file(absolutePath: { regex: "/discover.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    compare: file(absolutePath: { regex: "/compare.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    compete: file(absolutePath: { regex: "/compete.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    display: file(absolutePath: { regex: "/display.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
