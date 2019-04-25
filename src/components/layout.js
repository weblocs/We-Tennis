import React from "react"

import { rhythm } from "../utils/typography"


import Socials from "../components/socials"


class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div id="top"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(38),
          padding: `${rhythm(4)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)} `,
        }}
      >
        
        <Socials />
        <main>{children}</main>
        <footer>
          © 2019 WeTennis
        </footer>
          
      </div>
    )
  }
}

export default Layout
