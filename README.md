# zustand-clone

Base da playlist **Recriando o zustand**.

O app é um contador em React. O estado fica numa store mínima, no estilo do [Zustand](https://github.com/pmndrs/zustand), em `src/zustand`:

- `vanilla.ts` guarda o estado e avisa quem está inscrito
- `react.ts` conecta essa store aos componentes

## Rodar

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` sobe o app
- `pnpm build` gera o build
- `pnpm lint` roda o Biome
