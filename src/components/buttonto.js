/**
 * Button component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link as LinkTo } from "react-scroll";

import styles from "../components/button.module.css"

function ButtonTo({ title, link }) {

  return (
    <LinkTo
      to={link}
      spy={true} smooth={true} offset={-25} duration={500}
      className={styles.button}
      activeClassName="active"
    >
      {title}
    </LinkTo>
  )
}

ButtonTo.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ButtonTo
