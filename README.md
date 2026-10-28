# InnovaMarketing — Landing page

Landing page estática (HTML + CSS + JavaScript, sin frameworks) para la agencia **InnovaMarketing**, desplegada gratis en **AWS Amplify Hosting**.

## Estructura

```
index.html          Página principal
css/styles.css      Estilos (variables de color al inicio del archivo)
js/main.js          Menú móvil, animaciones y validación del formulario
assets/logo.svg     Logo vectorial (alta resolución, escalable)
assets/logo-hd.png  Logo en PNG 2000 px con fondo transparente
assets/favicon.svg  Ícono de la pestaña
amplify.yml         Configuración de despliegue para AWS Amplify
```

## Verla en tu computadora

Abre `index.html` con doble clic, o levanta un servidor local:

```bash
npx http-server -p 5500
```

## Despliegue en AWS Amplify Hosting (gratis)

AWS Amplify Hosting publica sitios estáticos directamente desde GitHub y entra en la capa gratuita de AWS. El archivo [`amplify.yml`](amplify.yml) le indica a Amplify que no hay nada que compilar y que publique la carpeta raíz tal cual.

### 1. Crear la cuenta de AWS

1. Regístrate en <https://aws.amazon.com/free>.
2. Cuando te pregunte el tipo de plan, elige **Free plan (plan gratuito)**: recibes créditos de prueba y AWS **no cobra** mientras no cambies a un plan de pago.
3. AWS pide una tarjeta solo para verificar tu identidad (puede hacer un cargo temporal de ~1 USD que se devuelve).
4. Recomendado: en **Billing → Budgets**, crea un presupuesto de **0 USD** con alerta por correo. Así te avisa si algo llegara a generar costo.

### 2. Conectar el repositorio

1. Sube el código a GitHub (repositorio `innova-marketing`).
2. En la consola de AWS busca **Amplify** → **Create new app** (Crear aplicación).
3. Elige **GitHub** → **Next** y autoriza a AWS Amplify a ver tu cuenta.
4. Selecciona el repositorio `innova-marketing` y la rama `main` → **Next**.
5. En **App settings**, Amplify detecta el `amplify.yml`. No cambies nada → **Next**.
6. Revisa y pulsa **Save and deploy**.

### 3. Ver la página publicada

Amplify ejecuta tres fases: **Provision → Build → Deploy**. Cuando las tres estén en verde (1–2 minutos), aparece una URL como:

```
https://main.d1abc2xyz3.amplifyapp.com
```

### 4. Actualizar la página (CI/CD)

Cada `git push` a `main` dispara un nuevo despliegue automático en Amplify:

```bash
git add .
git commit -m "Describe tu cambio"
git push
```

### Para no generar costos

- Este sitio pesa menos de 1 MB: está muy por debajo de los límites gratuitos (minutos de compilación, almacenamiento y tráfico).
- Cuando termines la tarea, si quieres, elimina la app en **Amplify → App settings → General → Delete app**.
