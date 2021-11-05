import React from 'react';
import styles from './Statistic.module.css';

const Statistic = ({ children, value, className }) => {
  return (
    <div className="col-lg col-md-6 col-6">
      <div className={`${styles[className]} ${styles.info}`}>
        <div className="row">
          <div className={`col-lg-6 col-md-6 col-6 ${styles.unit}`}>
            {children}
          </div>
          <div className={`col-lg-6 col-md-6 col-6 ${styles.value}`}>
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
