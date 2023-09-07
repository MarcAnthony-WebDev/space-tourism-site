import React from 'react';
import styles from './Navbar.module.css';

import img from '../images/shared/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img alt='logo' src={img}></img>
      <ul className={styles.navList}>
        <li className={styles.navItem}>00 home</li>
        <li className={styles.navItem}>01 destination</li>
        <li className={styles.navItem}>02 crew</li>
        <li className={styles.navItem}>03 technology</li>
      </ul>
    </nav>
  );
};

export default Navbar;
