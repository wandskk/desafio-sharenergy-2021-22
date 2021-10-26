import React from 'react';
import Graphic from '../../Components/Graphic/Graphic';
import SideStatistics from '../../Components/SideStatistics/SideStatistics';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          <div className="col">
            <h1>Olá, user</h1>
            <span className={styles.welcome}>Bem-vindo(a) de volta !</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <section className={styles.graphicsection}>
              <Graphic />
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.info + ' ' + styles.info1}></div>
          </div>
          <div className="col">
            <div className={styles.info + ' ' + styles.info2}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.info + ' ' + styles.info3}></div>
          </div>
          <div className="col">
            <div className={styles.info + ' ' + styles.info4}></div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <SideStatistics />
      </div>
    </div>
  );
};

export default Home;
