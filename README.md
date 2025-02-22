# React + TypeScript + Vite

## Descargar y levantar el proycto en local
1. Dentro de alguna carpeta local en la computadora, ejemplo "carpeta_local", abrir una shell o terminal e introducir la siguiente linea: `git clone https://github.com/2comidas/proyecto.git`
2. Una vez que se decarga el proyecto (lo que se descarga es una carpeta llamada "proyecto"), abrirlo con el ide de preferencia.
3. En la ubicacion `carpeta_local/proyecto/` (es decir, dentro de la carpeta proyecto), ingresar los siguientes comandos:
   - `npm install` Esto hace que se instalen todas las dependencias
   - `npm run dev` Esto permite que arranque el proyecto y con ello ya se lo podría visualizar en el navegador en la url **http://localhost:5173/proyecto/**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
