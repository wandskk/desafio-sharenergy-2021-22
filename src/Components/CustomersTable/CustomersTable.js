import React from 'react';
import styles from './CustomersTable.module.css';
import userPng from '../../Images/user.png';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteSweep } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import CustomerDelete from '../CustomerDelete/CustomerDelete';

const ClientsTable = ({ data, msg, setMsg, getData, profit }) => {
  if (data !== null)
    return (
      <table className={'table table-borderless ' + styles.clientTable}>
        <thead className={styles.thead}>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Usinas</th>
            <th scope="col">Lucro do dia</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map(({ id, nomeCliente, usinas }) => (
            <tr className={styles.clientInfos} key={id}>
              <td>
                <div className="row">
                  <div className="col-1">
                    <div className="perfilphoto">
                      <img src={userPng} alt="Foto do usuário" />
                    </div>
                  </div>
                  <div className="col">
                    <ul>
                      <li className={styles.clientName}>{nomeCliente}</li>
                      <li className={styles.id}>#{id}</li>
                    </ul>
                  </div>
                </div>
              </td>

              <td>
                <ul className={styles.clientUsines}>
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
                    <NavLink to={'/clients/' + id}>
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

export default ClientsTable;
