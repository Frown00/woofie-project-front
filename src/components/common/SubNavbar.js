import React from 'react'
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './SubNavbar.module.scss';

function SubNavbar(props) {

  const itemsClasses = ["navbar__button-primary", "navbar__button-secondary"];

  let i = 0;
  let itemClass;
  const url = props.match.url ? props.match.url : '';
  console.log(url);
  const navbarLinks =
    props.links.map(link => {
      i++;
      itemClass = i % 2 === 0 ? itemsClasses[1] : itemsClasses[0];
      return (
        <Link to={url + link.to} styleName="subnavbar__item" className={itemClass}>
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

export default CSSModules(SubNavbar, styles);