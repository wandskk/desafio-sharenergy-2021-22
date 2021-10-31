import React from 'react';
import styles from './CustomerDelete.module.css';
import { BASE_URL } from '../../api';

const CustomerDelete = ({ children, id, setMsg, getData }) => {
  async function deleteCustomer() {
    const req = await fetch(`${BASE_URL}/clientes/${id}`, {
      method: 'DELETE',
    });

    if (req.ok === true) {
      setMsg({
        text: `Cliente n° ${id} foi deletado.`,
        className: 'error',
      });
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'error' });
    }
    getData();
  }
  return (
    <span onClick={deleteCustomer} className={styles.delete}>
      {children}
    </span>
  );
};

export default CustomerDelete;
