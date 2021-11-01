import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api';
import CustomerEdit from '../../Components/CustomerEdit/CustomerEdit';
import CustomersTable from '../../Components/CustomersTable/CustomersTable';
import Loading from '../../Components/Loading/Loading';
import Message from '../../Components/Message/Message';
import Title from '../../Components/Title/Title';

const Clients = () => {
  const { edit } = useParams();

  const [data, setData] = React.useState(null);
  const [profit, setProfit] = React.useState(null);
  const [msg, setMsg] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getData() {
    const response = await fetch(BASE_URL + '/clientes');
    const json = await response.json();
    if (json.length > 0) {
      setData(json);
      setLoading(false);
    }
    setLoading(false);
  }

  async function getProfit() {
    const response = await fetch(`${BASE_URL}/usina`);
    const json = await response.json();
    if (response.ok === true) {
      const arr = [];
      for (let i = 0; i < json.length; i++) {
        arr.push({
          tempo_h: json[i]['tempo_h'],
          potencia_kW: json[i]['potencia_kW'],
        });
      }
      let dE = arr.reduce((total, item) => {
        return total + item.potencia_kW;
      }, 0);
      let dT;
      for (let i = 0; i <= arr.length; i++) {
        let next = i + 1;
        if (next < arr.length) {
          let calc = arr[next].tempo_h - arr[i].tempo_h;
          dT = calc - Math.trunc(calc);
        }
      }
      let p = dE * dT;
      let profit = 0.95 * p;
      setProfit(profit);
      setLoading(false);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    getData();
    getProfit();
  }, []);

  if (edit) return <CustomerEdit />;
  if (loading) return <Loading />;
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
              profit={profit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
