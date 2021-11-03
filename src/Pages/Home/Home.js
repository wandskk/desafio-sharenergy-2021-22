import React from 'react';
import { BASE_URL } from '../../api';
import Graphic from '../../Components/Graphic/Graphic';
import Statistic from '../../Components/Graphic/Statistic';
import Loading from '../../Components/Loading/Loading';
import Title from '../../Components/Title/Title';
import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = React.useState(null);
  const [average, setAverage] = React.useState(null);
  const [patternDeviation, setPatternDeviation] = React.useState(null);
  const [max, setMax] = React.useState(null);
  const [min, setMin] = React.useState(null);

  const [loading, setLoading] = React.useState(true);
  const [select, setSelect] = React.useState(null);

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

  function getAverage() {
    if (data !== null && data.length > 0) {
      const media = data.reduce((total, item) => {
        return total + item[select];
      }, 0);
      setAverage([(media / data.length).toFixed(2)]);
    }
  }

  function getPatternDeviation() {
    if (data !== null && data.length > 0) {
      let filtered = [];
      data.filter((item) => {
        filtered.push(item[select].toFixed(2));
      });
      let deviation = filtered.reduce(
        (total, valor) =>
          total + Math.pow(average - valor, 2) / filtered.length,
        0
      );
      let patternDeviation = Math.sqrt(deviation);
      setPatternDeviation(patternDeviation.toFixed(2));
    }
  }

  function getMaxAndMin() {
    if (data !== null && data.length > 0) {
      let filtered = [];
      data.filter((item) => {
        filtered.push(item[select].toFixed(2));
      });
      var max = filtered.reduce((a, b) => {
        return Math.max(a, b);
      });
      var min = filtered.reduce((a, b) => {
        return Math.min(a, b);
      });
      setMax(max);
      setMin(min);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    getAverage();
    getPatternDeviation();
    getMaxAndMin();
  }, [select]);

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <div className="row">
      <div className="col-lg col-md">
        <div className="row">
          <div className="col-lg col-md">
            <Title>Olá, user</Title>
            <span className={styles.welcome}>Bem-vindo(a) de volta !</span>
          </div>
        </div>
        <div className={styles.statistics + ' row'}>
          <Statistic
            value={average}
            className={styles.info + ' ' + styles.info1}
          >
            M<sub>e</sub>
          </Statistic>
          <Statistic
            label={'D.P.'}
            value={patternDeviation}
            className={styles.info + ' ' + styles.info2}
          >
            σ
          </Statistic>
          <Statistic value={max} className={styles.info + ' ' + styles.info3}>
            Máx.
          </Statistic>
          <Statistic value={min} className={styles.info + ' ' + styles.info4}>
            Mín.
          </Statistic>
        </div>
        <div className="row">
          <div className="col-lg col-md">
            <section className={styles.graphicsection}>
              <Graphic data={data} setSelection={setSelect} />
            </section>
          </div>
        </div>
        <div className={styles.statisticsMobile + ' row'}>
          <Statistic
            value={average}
            className={styles.info + ' ' + styles.info1}
          >
            M<sub>e</sub>
          </Statistic>
          <Statistic
            label={'D.P.'}
            value={patternDeviation}
            className={styles.info + ' ' + styles.info2}
          >
            σ
          </Statistic>
          <Statistic value={max} className={styles.info + ' ' + styles.info3}>
            Máx.
          </Statistic>
          <Statistic value={min} className={styles.info + ' ' + styles.info4}>
            Mín.
          </Statistic>
        </div>
      </div>
    </div>
  );
};

export default Home;
