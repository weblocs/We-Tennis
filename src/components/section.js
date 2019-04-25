import React from "react"
import styles from "./section.module.css"
import PropTypes from "prop-types";

import { rhythm } from "../utils/typography"

class SectionBlock extends React.Component {
  render() {
    const { children } = this.props
    const id = this.props.id;
    
    return (
      <div id={id}
        className={styles.pageSection}
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
        }}
      >
        {children}
      </div>
    )
  }
}


SectionBlock.propTypes = {
  id: PropTypes.string,
}

export default SectionBlock
