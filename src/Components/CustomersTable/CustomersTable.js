import React from 'react';
import styles from './CustomersTable.module.css';
import userPng from '../../Images/user.png';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteSweep } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import CustomerDelete from '../CustomerDelete/CustomerDelete';

const CustomersTable = ({ data, msg, setMsg, getData, profit }) => {
  if (data !== null)
    return (
      <table className={'table table-borderless ' + styles.customTable}>
        <thead className={styles.thead}>
          <tr>
            <th scope="col-md">Nome</th>
            <th scope="col-md">Usinas</th>
            <th scope="col-md">Lucro do dia</th>
            <th scope="col-md">Ações</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map(({ id, nomeCliente, usinas }) => (
            <tr className={styles.customInfos} key={id}>
              <td>
                <div className="row">
                  <div className={'col-md-1 col-0 ' + styles.perfilphoto}>
                    <div>
                      <img src={userPng} alt="Foto do usuário" />
                    </div>
                  </div>
                  <div className="col-md col customerName">
                    <ul>
                      <li>{nomeCliente}</li>
                      <li className={styles.id}>#{id}</li>
                    </ul>
                  </div>
                </div>
              </td>

              <td>
                <ul className={styles.customerUsines}>
                  {usinas.map(({ usinaId, percentualDeParticipacao }) => (
                    <li key={usinaId}>
                      Usina {usinaId}
                      <ul>
                        <li>Participação: {percentualDeParticipacao}%</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </td>
              <td className={styles.profit}>
                <ul>
                  <li>
                    {(
                      profit *
                      (usinas[0].percentualDeParticipacao / 100)
                    ).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </li>
                </ul>
              </td>

              <td className={styles.actions}>
                <ul>
                  <li>
                    <NavLink to={'/customers/' + id}>
                      <AiFillEdit /> Editar
                    </NavLink>
                  </li>
                  <li>
                    <CustomerDelete
                      msg={msg}
                      setMsg={setMsg}
                      id={id}
                      getData={getData}
                    >
                      <MdDeleteSweep />
                      Deletar
                    </CustomerDelete>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default CustomersTable;
