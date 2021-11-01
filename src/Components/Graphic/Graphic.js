import React from 'react';
import styles from './Graphic.module.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import SelectGraphic from './SelectGraphic';

const Graphic = ({ data, setSelection }) => {
  const [select, setSelect] = React.useState('tensao_V');
  const [currentUnit, setCurrentUnit] = React.useState('V');

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

  React.useEffect(() => {
    setSelection(select);
  }, [select]);

  return (
    <>
      <div className="row">
        <div className="col-9">
          <h2>Gráfico estatístico</h2>
        </div>
        <div className="col-3">
          <SelectGraphic
            styles={styles}
            select={select}
            setSelect={setSelect}
          />
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
