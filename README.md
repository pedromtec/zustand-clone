# zustand-clone

Base da playlist **Recriando o zustand**.

O app é um contador em React. Os componentes ficam em `src/components` e a store do contador em `src/stores`. A implementação, no estilo do [Zustand](https://github.com/pmndrs/zustand), fica em `src/lib/zustand`:

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
