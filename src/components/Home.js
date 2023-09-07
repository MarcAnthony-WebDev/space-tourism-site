import React from 'react';
import styles from './Home.module.css';

import Navbar from './Navbar';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeading}>
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.containerCircle}>EXPLORE</div>
    </div>
  );
};

export default Home;
