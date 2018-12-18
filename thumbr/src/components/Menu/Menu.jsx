import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import search from './../../assets/imgs/search.svg';

const Menu = ({ brand, items }) => (
  <div className="menu">
    <div className="menu__brand">
      <Link to={ brand.path }>{ brand.label }</Link>
    </div>
    <ul className="menu__items">
      {
        items.map(item => (
          <li className="menu__item" key={ item.path }>
            <Link to={ item.path }>{ item.label }</Link>
          </li>
        ))
      }
      <li>
        <img src={search} alt=""/>
      </li>
    </ul>
  </div>
);

Menu.propTypes = {
  brand: PropTypes.object,
  items: PropTypes.array
};

export default Menu;