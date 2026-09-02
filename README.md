# RÍOS · Links oficiales

Página de links para un artista, construida con React y Vite.

## Uso local

```bash
npm install
npm run dev
```

Edita `src/artist.js` para cambiar el nombre, foto, biografía y enlaces.

## Imágenes

Coloca las imágenes del artista en `public/images/`. Para usar una imagen local como fondo, copia allí tu archivo y cambia `backgroundImage` en `src/artist.js` a, por ejemplo, `/images/artist-background.jpg`.

## Supabase

La primera versión usa `src/artist.js` como fuente de datos para que sea fácil personalizarla. Supabase puede incorporarse después para guardar estos datos en una tabla `artist_profile` y administrarlos desde un panel privado.
