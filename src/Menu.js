import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/countries">Pays</Link>
        </li>
        <li>
          <Link to="/cities">Villes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;