import api from '../api';
import type { Usina } from '../../types';

export const getUsinas = async (): Promise<Usina[]> => {
  const response = await api.get('/usinas');
  return response.data;
};

export const getUsinaById = async (id: number): Promise<Usina> => {
  const response = await api.get(`/usinas/${id}`);
  return response.data;
};

export const createUsina = async (data: Usina): Promise<Usina> => {
  const response = await api.post('/usinas', data);
  return response.data;
};

export const updateUsina = async (id: number, data: Usina): Promise<Usina> => {
  const response = await api.put(`/usinas/${id}`, data);
  return response.data;
};

export const deleteUsina = async (id: number): Promise<void> => {
  await api.delete(`/usinas/${id}`);
}; 