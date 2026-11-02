# zustand-clone

Este repositório reúne o material da playlist **Recriando o zustand**. Nesta etapa, o projeto contém apenas a interface do contador em React. A store ainda não faz parte do código. O resultado serve de ponto de partida para a série e não substitui a biblioteca oficial [Zustand](https://github.com/pmndrs/zustand).

## Demonstração

A interface exibe o valor do contador, os botões de incremento e decremento e um checkbox. O valor apresentado é fixo. Os controles ainda não alteram a tela.

## Estrutura

```text
src/
  components/          Interface do contador
  App.tsx              Composição da tela
  main.tsx             Ponto de entrada
```

`App.tsx` reúne os três componentes. Cada arquivo em `src/components` responde somente pela apresentação do seu trecho da interface.

## Requisitos

O projeto utiliza [pnpm](https://pnpm.io/) e uma versão atual do Node.js, compatível com o Vite adotado no repositório.

## Execução

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Para verificar o resultado de produção localmente:

```bash
pnpm build
pnpm preview
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Verifica os tipos e gera a versão de produção |
| `pnpm preview` | Serve a versão gerada por `pnpm build` |
| `pnpm lint` | Executa o Biome |
| `pnpm lint:fix` | Aplica as correções automáticas do Biome |
