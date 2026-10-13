# Portafolio electrónico: Deivid Samaniego Quispe

Curso: Diseño de Aplicaciones Web (UNCP). Hecho con React + Vite.

## Cómo usarlo en tu computadora

```bash
npm install
npm run dev        # abre http://localhost:5173
```

## Dónde editar

- **Todo el contenido** está en `src/data/content.js` (perfil, estudios, proyectos,
  semanas del cuaderno, reflexión final y bibliografía).
- **Tu foto**: guárdala en la carpeta `public/` con el nombre `foto.jpg`.
- **Tu CV**: guárdalo en `public/` y pon su nombre en `perfil.cv`.
- **Colores y tipografía**: variables al inicio de `src/styles.css`.

## Cada semana

En `content.js`, copia el último bloque de `semanas` y cambia el número, el título,
los temas (con tus propias palabras), los ejercicios y tu reflexión. La pestaña
aparece sola.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primer commit del portafolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `git push` a `main` publica el sitio automáticamente en
   `https://TU-USUARIO.github.io/TU-REPO/`.
4. Actualiza los enlaces de GitHub, LinkedIn, repo y demo en `content.js`.

## Requisitos del curso que cubre

Portada · Sobre mí · Proyectos concluidos · Cuaderno (semanas) · Reflexión final · Bibliografía (libros y URLs, sin videos).
