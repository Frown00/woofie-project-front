import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <ul styleName="navbar">

        {
          props.navLinks.map((link, key) =>
            <Link to={link.to} key={key}>
              <li styleName="navbar__item" className="button">
                <span styleName="navbar__item__content">
                  <img styleName="navbar__item__content__image"
                    src={link.icon}
                    alt={link.text}
                  />
                </span>
              </li>
            </Link>

          )
        }
      </ul>

      <ul styleName="navbar-desktop">
        {
          props.navLinks.map((link, key) =>
            <Link to={link.to} key={key}>
              <li styleName="navbar-desktop__item" className="button">
                <span styleName="navbar-desktop__item__content">
                  <img styleName="navbar-desktop__item__content__image"
                    src={link.icon}
                    alt={link.text}
                  />
                </span>
                <span styleName="navbar-desktop__text">{link.text}</span>
              </li>
            </Link>

          )
        }
      </ul>

    </nav>
  )
}

export default CSSModules(Navbar, styles);

