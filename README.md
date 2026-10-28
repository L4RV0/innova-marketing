# InnovaMarketing — Landing page

Landing page estática (HTML + CSS + JavaScript, sin frameworks) para la agencia **InnovaMarketing**, desplegada gratis en **Azure Static Web Apps**.

## Estructura

```
index.html          Página principal
css/styles.css      Estilos (variables de color al inicio del archivo)
js/main.js          Menú móvil, animaciones y validación del formulario
assets/logo.svg     Logo vectorial (alta resolución, escalable)
assets/logo-hd.png  Logo en PNG 2000 px con fondo transparente
assets/favicon.svg  Ícono de la pestaña
```

## Verla en tu computadora

Abre `index.html` con doble clic, o levanta un servidor local:

```bash
npx http-server -p 5500
```

## Despliegue en Azure Static Web Apps (plan Free)

1. **Sube el código a GitHub** (repositorio `innova-marketing`).
2. Entra a <https://portal.azure.com> → **Crear un recurso** → busca **Static Web App** → **Crear**.
3. Completa:
   - **Suscripción**: Azure for Students (o tu cuenta gratuita).
   - **Grupo de recursos**: crea uno nuevo, p. ej. `rg-innova`.
   - **Nombre**: `innova-marketing`.
   - **Tipo de plan**: **Free**.
   - **Origen**: **GitHub** → inicia sesión y elige tu organización, el repositorio y la rama `main`.
   - **Valores preestablecidos de compilación**: **Custom**.
     - Ubicación de la app: `/`
     - Ubicación de la API: *(vacío)*
     - Ubicación de salida: *(vacío)*
4. **Revisar y crear** → **Crear**.
5. Azure agrega automáticamente un archivo en `.github/workflows/` a tu repositorio. Ese archivo es un **pipeline de GitHub Actions**: cada vez que haces `git push` a `main`, GitHub vuelve a publicar la página sola (CI/CD).
6. En la pestaña **Actions** de GitHub verás el despliegue; cuando termine en verde, abre la **URL** que aparece en el recurso de Azure (algo como `https://xxxx.azurestaticapps.net`).

### Actualizar la página

```bash
git pull
git add .
git commit -m "Describe tu cambio"
git push
```

> Haz `git pull` primero, porque Azure añadió el archivo del workflow en GitHub y tu copia local no lo tiene todavía.
