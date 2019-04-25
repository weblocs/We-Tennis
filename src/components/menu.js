/**
 * Menu component
 */

import { Link, graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import styles from "../components/menu.module.scss";

import { Link as LinkTo } from "react-scroll";






function Menu({ title, link, menu }) {

  

  return (
    <StaticQuery
    query={menuQuery}
    render={data => {
      
      

    return (
      <nav>  
        
      
      
      <LinkTo
        to="top"
        className={styles.button}
        activeClassName="active"
      >
        <Image fixed={data.file.childImageSharp.fixed} />
      </LinkTo>
      <div className={styles.innerNav}>

      <Link
          to="/" 
          activeClassName="active"
          className="linkActive"
        >
        intro
        </Link>
        <Link
          to="/about"
          activeClassName="active"
        >
          about
        </Link>
        <a href="#">|</a>
        
        <LinkTo
          to={menu[0]}
          spy={true} smooth={true} offset={-80} duration={500}
          activeClassName="active"
        >
          {menu[0]} 
        </LinkTo>
        
        <LinkTo
          to={menu[1]}
          spy={true} smooth={true} offset={-25} duration={500}
          activeClassName="active"
        >
          {menu[1]} 
        </LinkTo>
        
        <LinkTo
          to={menu[3]}
          spy={true} smooth={true} offset={-25} duration={500}
          activeClassName="active"
        >
          {menu[3]} 
        </LinkTo>
      </div>
      </nav>
    )  
  }} />
  )
  }

export const menuQuery = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.string),
}

export default Menu