import React from 'react';
import { BASE_URL } from '../../api';
import Graphic from '../../Components/Graphic/Graphic';
import Loading from '../../Components/Loading/Loading';
import SideStatistics from '../../Components/SideStatistics/SideStatistics';
import Title from '../../Components/Title/Title';
import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  async function getData() {
    const response = await fetch(`${BASE_URL}/usina`);
    const json = await response.json();
    if (response.ok === true) {
      const data = [];
      for (let i = 0; i < json.length; i++) {
        let hour = Math.trunc(json[i]['tempo_h']);
        let minutes = (json[i]['tempo_h'] - hour) * 0.6;

        data.push({
          tempo_h: (hour + minutes).toFixed(2).replace('.', ':'),
          tensao_V: json[i]['tensao_V'],
          corrente_A: json[i]['corrente_A'],
          potencia_kW: json[i]['potencia_kW'],
          temperatura_C: json[i]['temperatura_C'],
        });
      }
      setData(data);
      setLoading(false);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    getData();
  }, []);
  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          <div className="col">
            <Title>Olá, user</Title>
            <span className={styles.welcome}>Bem-vindo(a) de volta !</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <section className={styles.graphicsection}>
              <Graphic data={data} setData={setData} />
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
