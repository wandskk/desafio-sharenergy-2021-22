const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  // Cria a usina principal
  const usina = await prisma.usina.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Usina Principal',
    },
  });

  // Importa produções
  const producoesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../dadosUsina.json'), 'utf8'));
  for (const prod of producoesData) {
    await prisma.producao.create({
      data: {
        usinaId: usina.id,
        tempo_h: prod.tempo_h,
        tensao_V: prod.tensao_V,
        corrente_A: prod.corrente_A,
        potencia_kW: prod.potencia_kW,
        temperatura_C: prod.temperatura_C,
      },
    });
  }

  // Importa clientes e participações
  const clientesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../dadosClientes.json'), 'utf8'));
  for (const cliente of clientesData) {
    const novoCliente = await prisma.cliente.create({
      data: {
        numeroCliente: cliente.numeroCliente,
        nomeCliente: cliente.nomeCliente,
      },
    });
    for (const usinaPart of cliente.usinas) {
      await prisma.clienteUsina.create({
        data: {
          clienteId: novoCliente.id,
          usinaId: usinaPart.usinaId,
          percentualDeParticipacao: usinaPart.percentualDeParticipacao,
        },
      });
    }
  }

  console.log('Seed concluído!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 