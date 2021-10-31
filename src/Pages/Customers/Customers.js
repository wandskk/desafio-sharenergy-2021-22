import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api';
import CustomerEdit from '../../Components/CustomerEdit/CustomerEdit';
import CustomersTable from '../../Components/CustomersTable/CustomersTable';
import Message from '../../Components/Message/Message';
import Title from '../../Components/Title/Title';

const Clients = () => {
  const { edit } = useParams();

  const [data, setData] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  async function getData() {
    const response = await fetch(BASE_URL + '/clientes');
    const json = await response.json();
    if (json.length > 0) {
      setData(json);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  if (edit) return <CustomerEdit />;
  if (data === null)
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <Title>Não há clientes cadastrados!</Title>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          {msg !== null && (
            <div className="col-10 offset-md-1">
              <Message msg={msg} setMsg={setMsg} className={msg.className} />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col">
            <Title>Lista de clientes</Title>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CustomersTable
              data={data}
              getData={getData}
              msg={msg}
              setMsg={setMsg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
