# README

This template augments `pnpm init @vitejs/app app -- --template react-ts` with:

- **only-allow pnpm** preinstall script.
- **eslint** properly configured for rollup, along with **prettier**.
- `~` and `~/public` aliases, mapping to `./src` and `./public` respectively.
- **tailwindcss** and **autoprefixer**.


**Disable prettier option in eslint config if you don't want formatting errors**