import React from 'react';
import styles from './Graphic.module.css';
import { BASE_URL } from '../../api';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { VscSettings } from 'react-icons/vsc';

const Graphic = () => {
  const [data, setData] = React.useState(null);
  const [select, setSelect] = React.useState('tensao_V');
  const [currentUnit, setCurrentUnit] = React.useState('V');

  async function getData() {
    const response = await fetch(`${BASE_URL}/usina`);
    const json = await response.json();
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
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    switch (select) {
      case 'tensao_V':
        setCurrentUnit('V');
        break;
      case 'corrente_A':
        setCurrentUnit('A');
        break;
      case 'potencia_kW':
        setCurrentUnit('kW');
        break;
      case 'temperatura_C':
        setCurrentUnit('c°');
        break;
      default:
        setCurrentUnit('V');
        break;
    }
  }, [select]);

  return (
    <>
      <div className="row">
        <div className="col-9">
          <h2>Gráfico estatístico</h2>
        </div>
        <div className="col-3">
          <div className={styles.select}>
            <select
              name="graphChange"
              id="graphChange"
              value={select}
              onChange={({ target }) => setSelect(target.value)}
            >
              <option value="tensao_V">Tensão</option>
              <option value="corrente_A">Corrente</option>
              <option value="potencia_kW">Potência</option>
              <option value="temperatura_C">Temperatura</option>
            </select>
            <label htmlFor="graphChange">
              <VscSettings />
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className={styles.graphic}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 20, right: 20 }}
              >
                <Line
                  type="monotone"
                  dataKey={select}
                  stroke="#8884d8"
                  isAnimationActive
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="tempo_h" interval="preserveStartEnd" unit="h" />
                <YAxis unit={currentUnit} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphic;
