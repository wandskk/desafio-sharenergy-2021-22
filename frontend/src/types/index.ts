export interface Cliente {
  id?: number;
  numeroCliente: number;
  nomeCliente: string;
  usinas: {
    usinaId: number;
    percentualDeParticipacao: number;
  }[];
}

export interface Usina {
  id?: number;
  nome: string;
}

export interface Producao {
  id?: number;
  usinaId: number;
  tempo_h: number;
  tensao_V: number;
  corrente_A: number;
  potencia_kW: number;
  temperatura_C: number;
} 