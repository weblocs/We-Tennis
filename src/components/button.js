/**
 * Button component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "../components/button.module.css"

function Button({ title, link }) {

  return (
    <Link
      to={link}
      className={styles.button}
      activeClassName="active"
    >
      {title}
    </Link>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Button
