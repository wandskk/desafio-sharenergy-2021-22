-- CreateTable
CREATE TABLE "Usina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Usina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "numeroCliente" INTEGER NOT NULL,
    "nomeCliente" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClienteUsina" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "usinaId" INTEGER NOT NULL,
    "percentualDeParticipacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ClienteUsina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producao" (
    "id" SERIAL NOT NULL,
    "usinaId" INTEGER NOT NULL,
    "tempo_h" DOUBLE PRECISION NOT NULL,
    "tensao_V" DOUBLE PRECISION NOT NULL,
    "corrente_A" DOUBLE PRECISION NOT NULL,
    "potencia_kW" DOUBLE PRECISION NOT NULL,
    "temperatura_C" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Producao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_numeroCliente_key" ON "Cliente"("numeroCliente");

-- AddForeignKey
ALTER TABLE "ClienteUsina" ADD CONSTRAINT "ClienteUsina_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClienteUsina" ADD CONSTRAINT "ClienteUsina_usinaId_fkey" FOREIGN KEY ("usinaId") REFERENCES "Usina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producao" ADD CONSTRAINT "Producao_usinaId_fkey" FOREIGN KEY ("usinaId") REFERENCES "Usina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
