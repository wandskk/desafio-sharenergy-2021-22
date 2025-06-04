import api from '../api';
import type { Producao } from '../../types';

export const getProducoes = async (usinaId: number): Promise<Producao[]> => {
  const response = await api.get(`/usinas/${usinaId}/producoes`);
  return response.data;
};

export const getProducaoById = async (id: number): Promise<Producao> => {
  const response = await api.get(`/producoes/${id}`);
  return response.data;
};

export const createProducao = async (data: Producao): Promise<Producao> => {
  const response = await api.post('/producoes', data);
  return response.data;
};

export const updateProducao = async (id: number, data: Producao): Promise<Producao> => {
  const response = await api.put(`/producoes/${id}`, data);
  return response.data;
};

export const deleteProducao = async (id: number): Promise<void> => {
  await api.delete(`/producoes/${id}`);
}; 