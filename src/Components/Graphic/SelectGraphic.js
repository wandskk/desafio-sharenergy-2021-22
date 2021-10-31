import React from 'react';

const SelectGraphic = ({ styles, select, setSelect }) => {
  return (
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
    </div>
  );
};

export default SelectGraphic;
