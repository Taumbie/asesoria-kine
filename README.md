# Hugo Hidalgo Alarcón · Landing Page

Landing page profesional para Hugo Hidalgo Alarcón, kinesiólogo especialista en rehabilitación física y respiratoria (adultos y niños).

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (paleta médica personalizada)
- **Framer Motion** (animaciones, parallax, scroll-triggered, springs)
- **Lenis** (smooth scroll)
- **Lucide React** (íconos)
- **gh-pages** (deploy a GitHub Pages)

## Estructura

```
asesoria-kine/
├── public/
│   ├── hugo-foto.jpeg            # Foto principal
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx  # Fondo dinámico (mesh + blobs)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyMe.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SectionHeading.tsx
│   ├── data/
│   │   └── placeholder.ts          # 👈 Datos editables (X = pendiente)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Datos pendientes (marcados con X)

Toda la info personalizable está en **`src/data/placeholder.ts`**. Cuando Hugo te pase los datos reales, solo edita ese archivo.

Pendientes:
- Número de WhatsApp real (formato `569XXXXXXXX`)
- Email
- Ciudad
- Instagram
- Registro profesional
- Datos de "Sobre mí" (formación, capacitaciones, etc.)

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # genera dist/
npm run preview      # sirve dist/ en local
```

## Deploy a GitHub Pages (gratis)

### Opción 1 — gh-pages (lo más simple)

1. Crear repo en GitHub (ej: `hugohidalgo-kine`)
2. En `package.json` ya está el script `deploy` configurado.
3. En `vite.config.ts` el `base: "./"` ya está listo para user/repo.io.
4. Instalar gh-pages CLI (ya está como devDep):
   ```bash
   npm run deploy
   ```
   Esto buildea y publica la carpeta `dist/` en la rama `gh-pages`.
5. En GitHub: **Settings → Pages → Branch: `gh-pages` / root**.
6. Tu URL será: `https://<usuario>.github.io/hugohidalgo-kine/`

### Opción 2 — GitHub Actions (build automático en cada push)

1. Crear `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     build-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. Push a `main` → la página se publica sola en `gh-pages`.

## Personalización visual

- **Colores:** `tailwind.config.js` → `colors.kine` y `colors.teal`
- **Animaciones:** keyframes en `tailwind.config.js` (blob, breathe, shimmer)
- **Tipografías:** Inter + Plus Jakarta Sans (vía Google Fonts en `index.html`)
