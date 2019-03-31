import React from "react";
import { Link } from "gatsby";
import Header from "./header";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div style={{
				marginLeft: `auto`,
				marginRight: `auto`,
				maxWidth: rhythm(40),
				padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
			}}>
        <Header />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(35),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
