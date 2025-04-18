# Frontend - Registro de Jornada

Este frontend está hecho con React + Vite, listo para desplegarse en Netlify.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Variables de entorno

Crear un archivo `.env.local`:

```
VITE_API_URL=https://tu-backend.up.railway.app
```

## Despliegue en Netlify

1. Subir este proyecto a GitHub
2. Crear nuevo sitio en Netlify desde GitHub
3. Agregar la variable `VITE_API_URL`
4. Usar:
   - Build command: `npm run build`
   - Publish directory: `dist`
