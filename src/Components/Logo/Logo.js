import React from 'react';
import src from './../../Images/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logo} src={src} alt="Logo" />
    </div>
  );
};

export default Logo;
