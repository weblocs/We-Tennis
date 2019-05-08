/**
 * Menu component
 */

import { Link, graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import styles from "../components/menu.module.scss";

import { Link as LinkTo } from "react-scroll";






function MenuAbout({ title, link, menu }) {

  

  return (
    <StaticQuery
    query={menuAboutQuery}
    render={data => {
      
      

    return (
      <nav>  

      <Link
        to={link}
        className={styles.button}
        activeClassName="active"
      >
        <Image fixed={data.file.childImageSharp.fixed} />
      </Link>
      <div className={styles.innerNav}>

        <Link
          to="/about"
          activeClassName="active"
        >
          about
        </Link>

        <LinkTo
          to="app"
          spy={true} smooth={true} offset={-30} duration={500}
          activeClassName="active"
        >
          app
        </LinkTo>

        <LinkTo
          to="contact"
          spy={true} smooth={true} offset={-80} duration={500}
          activeClassName="active"
        >
          contact
        </LinkTo>
        
      
      
      {/* 
        
        <Link
          to="/" 
          activeClassName="active"
        >
        intro
        </Link>
        <Link
          to="/about" 
          activeClassName="active"
          className="linkActive"
        >
        about
        </Link>
        <span>|</span>
        <LinkTo
          to="app"
          spy={true} smooth={true} offset={-25} duration={500}
          activeClassName="active"
        >
          idea
        </LinkTo>
        
        <LinkTo
          to={menu[3]}
          spy={true} smooth={true} offset={-25} duration={500}
          activeClassName="active"
        >
          {menu[3]} 
        </LinkTo> */}
      </div>
      </nav>
    )  
  }} />
  )
  }

export const menuAboutQuery = graphql`
  query {
    file(relativePath: { eq: "WeTennis.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

MenuAbout.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.string),
}

export default MenuAbout