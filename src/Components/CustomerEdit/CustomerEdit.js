import React from 'react';
import styles from './CustomerEdit.module.css';
import { BASE_URL } from '../../api';
import { useParams } from 'react-router-dom';
import Title from '../Title/Title';
import Input from '../Form/Input';
import Message from '../Message/Message';
import Loading from '../Loading/Loading';

const CustomerEdit = () => {
  const [loading, setLoading] = React.useState(true);

  const { edit } = useParams();

  const [data, setData] = React.useState(null);
  const [name, setName] = React.useState('');
  const [usineId, setUsineId] = React.useState('');
  const [usinePercent, setUsinePercent] = React.useState('');
  const [msg, setMsg] = React.useState(null);

  async function getData() {
    const response = await fetch(BASE_URL + '/clientes/' + edit);
    const json = await response.json();
    if (response.ok === true) {
      setData(json);
      setName(json.nomeCliente);
      setUsineId(json.usinas[0].usinaId);
      setUsinePercent(json.usinas[0].percentualDeParticipacao);
      setLoading(false);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    getData();
  }, []);

  async function updateCustomer() {
    const dataJson = JSON.stringify({
      nomeCliente: name,
      usinas: [
        {
          usinaId: usineId,
          percentualDeParticipacao: usinePercent,
        },
      ],
    });
    const response = await fetch(BASE_URL + '/clientes/' + edit, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: dataJson,
    });
    const json = await response.json();
    console.log(json);

    if (response.ok === true) {
      setMsg({
        text: `Cliente n° ${edit} atualizado com sucesso`,
        className: 'updated',
      });
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'red' });
    }
    getData();
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateCustomer();
  }
  if (loading) return <Loading />;
  if (data === null)
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <Title>Lista de clientes {'>'} Sem resultado</Title>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2>Ops, acho que algo deu errado :(</h2>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          {msg !== null && (
            <div className="col-md-10 col-12 offset-md-1">
              <Message msg={msg} setMsg={setMsg} className={msg.className} />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-12">
            <Title>
              Lista de clientes {'>'} Editar {'>'} {data.nomeCliente}
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Formulário de alteração do cliente</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className={styles.formEdit}>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Cliente"
                  value={name}
                  setValue={({ target }) => setName(target.value)}
                />
                <Input
                  label="ID -> Usina"
                  value={usineId}
                  setValue={({ target }) => setUsineId(target.value)}
                />
                <Input
                  label="Percentual de participação "
                  value={usinePercent}
                  setValue={({ target }) => setUsinePercent(target.value)}
                  unit="%"
                />

                <button type="submit" className="btn btn-success">
                  Atualizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerEdit;
