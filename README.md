# zustand-clone

Este repositório reúne o material da playlist **Recriando o zustand**. O projeto contém um contador em React e uma implementação reduzida de store, escrita no mesmo espírito do [Zustand](https://github.com/pmndrs/zustand). O código serve de referência para a série e não substitui a biblioteca oficial.

## Demonstração

A interface exibe o valor do contador, os botões de incremento e decremento e um checkbox que habilita a interação. O contador inicia em zero e desabilitado. Cada componente consulta apenas o trecho do estado de que precisa.

## Estrutura

```text
src/
  components/          Interface do contador
  stores/              Store usada pelo exemplo
  lib/zustand/
    vanilla.ts         Estado, atualização e inscrição
    react.ts           Integração da store com o React
  App.tsx              Composição da tela
  main.tsx             Ponto de entrada
```

`vanilla.ts` mantém o estado em memória, aplica atualizações parciais e notifica os inscritos. `react.ts` expõe o hook `create`, que associa essa store a um componente e permite selecionar uma parte do estado. A store do contador fica em `src/stores/counter-store.ts` e é o único ponto em que a interface depende da implementação.

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
