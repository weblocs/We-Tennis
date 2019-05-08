/**
 * Menu component
 */

import { Link, graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styles from "../components/menu.module.scss"
import Hamburger from "react-hamburgers"
import { Link as LinkTo } from "react-scroll"

class MenuAbout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }
  render() {
    return (
      <StaticQuery
        query={menuAboutQuery}
        render={data => {
          return (
            <div>
              <nav>
                <Link
                  to={this.props.link}
                  className={styles.button}
                  activeClassName="active"
                >
                  <Image
                    className="logotype"
                    fixed={data.file.childImageSharp.fixed}
                  />
                </Link>
                <div className={styles.innerNav}>
                  <div className="onlyMobile">
                    <Hamburger
                      active={this.state.active}
                      type="squeeze"
                      onClick={() =>
                        this.setState({ active: !this.state.active })
                      }
                    />
                  </div>

                  <Link
                    className="onlyDesktop"
                    to="/about"
                    activeClassName="active"
                  >
                    about
                  </Link>

                  <LinkTo
                    className="onlyDesktop"
                    to="app"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                    activeClassName="active"
                  >
                    app
                  </LinkTo>

                  <LinkTo
                    className="onlyDesktop"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClassName="active"
                  >
                    contact
                  </LinkTo>
                </div>
              </nav>
              <div className={`${styles.mobileMenu} ${!this.state.active ? styles.hide : ''}`} >
              <div className={styles.mobileInner}>
                <Link to="/about" activeClassName="active" 
                onClick={() =>
                  this.setState({ active: !this.state.active })
                } >
                  about
                </Link>

                <LinkTo
                  to="app"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  activeClassName="active"
                  onClick={() =>
                    this.setState({ active: !this.state.active })
                  }
                >
                  app
                </LinkTo>

                <LinkTo
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClassName="active"
                  onClick={() =>
                    this.setState({ active: !this.state.active })
                  }
                >
                  contact
                </LinkTo>
                </div>
              </div>
            </div>
          )
        }}
      />
    )
  }
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
