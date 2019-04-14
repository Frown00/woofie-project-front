import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';

Navbar.propTypes = {
  /** Array which contains all navLinks to display */
  navLinks: PropTypes.array,

}

Navbar.defaultProps = {
  navLinks: []
}

function Navbar(props) {

  return (
    <nav>
      <ul>
        {
          this.props.map((link, key) =>
            <li>

            </li>
          )
        }

      </ul>
      <div>

      </div>

    </nav>
  )
}

export default CSSModules(Navbar, styles);

