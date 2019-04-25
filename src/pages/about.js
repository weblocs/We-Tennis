import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionBlock from "../components/section"

import { rhythm } from "../utils/typography"
import "../styles/global.scss"

import "react-alice-carousel/lib/alice-carousel.css";
 
import IntroAbout from "../components/aboutintro"

import MenuAbout from "../components/menuabout"
import ButtonTo from "../components/buttonto"


class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <header>
            <MenuAbout
                title="Title"
                link="/"
                menu={[`app`, `vision`, `about`, `contact`]}
                links={[`app`, `vision`, `about`, `contact`]}
            />
        </header>
        <IntroAbout />
        <SectionBlock 
          id="app"
        >
            <h2>it all started with an idea 💡</h2>
            <h3>#TeamWorkMakesTheDreamWork</h3>
            <p style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(32),
            }}>We started in the summer of 2018 with a problem. The problem was 
            the majority of amateur and recreational tennis players  play tennis with 
            the same competitive nature as say a Roger Federer or Rafa Nadal but yet, 
            don’t have even the most basic stats like the pros. We also noticed other athletes 
            such as runners and cyclists were able to get great insight into their performance 
            and yet tennis players we’re being underserved (pun intended). So since then 
            we’ve made it our mission to make every tennis player feel more like a pro.</p>
            
            <p style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(32),
            }}>WeTennis wants to provide the best tennis experience for it’s community. 
            So we work closely with sports brands, retailers and clubs to help them connect 
            and engage with a global tennis community. If you want to join in with us in 
            providing the best tennis experience get in touch.</p>

            <ButtonTo
                title="become part of the journey"
                link="contact"
            />
            
        </SectionBlock>
        
      
          
        
        <SectionBlock
        id="contact">
            <h2>get in touch 👋</h2>
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

export default About

export const aboutQuery = graphql`
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
        fixed(width: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    discover: file(absolutePath: { regex: "/discover.png/" }) {
      childImageSharp {
        fixed(width: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    compare: file(absolutePath: { regex: "/compare.png/" }) {
      childImageSharp {
        fixed(width: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    compete: file(absolutePath: { regex: "/compete.png/" }) {
      childImageSharp {
        fixed(width: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
