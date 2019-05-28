import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './SubNavbar.module.scss';

class SubNavbar extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    const itemsClasses = ["navbar__button-primary", "navbar__button-secondary"];

    let i = 0;
    let itemClass;
    const url = this.props.match.url ? this.props.match.url : '';
    const navbarLinks =
      this.props.links.map((link, key) => {
        i++;
        itemClass = i % 2 === 0 ? itemsClasses[1] : itemsClasses[0];
        return (
          <Link to={url + link.to} styleName="subnavbar__item" style={link.style} className={itemClass} key={key}>
            <li>
              {link.title}
            </li>
          </Link>
        )


      })

    return (
      <nav>
        <ul styleName="subnavbar">
          {navbarLinks}
        </ul>
      </nav>
    )
  }

}




export default CSSModules(SubNavbar, styles);