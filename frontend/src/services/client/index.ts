import api from '../api';
import type { Cliente } from '../../types';

export const getClientes = async (): Promise<Cliente[]> => {
  const response = await api.get('/clientes');
  return response.data;
};

export const getClienteById = async (id: number): Promise<Cliente> => {
  const response = await api.get(`/clientes/${id}`);
  return response.data;
};

export const createCliente = async (data: Cliente): Promise<Cliente> => {
  const response = await api.post('/clientes', data);
  return response.data;
};

export const updateCliente = async (id: number, data: Cliente): Promise<Cliente> => {
  const response = await api.put(`/clientes/${id}`, data);
  return response.data;
};

export const deleteCliente = async (id: number): Promise<void> => {
  await api.delete(`/clientes/${id}`);
}; 