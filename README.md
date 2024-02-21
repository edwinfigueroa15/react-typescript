# Demo

Demo del proyecto en netlify

- [Ver proyecto en la web](https://pokemon-react-typescript.netlify.app)

# Instalación

Para ejecutar el proyecto deberá clonar o descargar el proyecto y necesitará algunas herramientas que mencionaré abajo:

- [NodeJs](https://nodejs.org/en) (El proyecto fue realizado con la version 16)

Ya que tengamos el proyecto clonado o descargado y Node instalado lo primero es crear un archivo **.env.local** en la raíz. Se dejó un archivo **.env.example** el cual solo es necesario cambiarle el nombre ya que la información de archivo es la misma y el nuevo nombre deberá ser:

```
.env.local
```

Prodecemos a ejecutar una terminal en la carpeta donde esta nuestro proyecto y ejecutamos el siguiente comando:

```
npm install
```

Una vez termine de instalar todo gracias al comando anterior, ahora ejecutamos el siguiente comando para iniciar el proyecto:

```
npm run dev
```

Una vez termine de iniciar podremos acceder al proyecto colocando lo siguiente en cualquier navegador:

```
http://127.0.0.1:5173
```

## Librerías utilizadas

El proyecto se trabajo en cierta forma con un enfoque a Atom Design y se usaron las siguientes herramientas:

- [Tailwindcss](https://tailwindcss.com): Utilizada para trabajar los estilos y clases que ya tiene definidas.
- [Recharts](https://recharts.org/en-US): Utilizada para crear las gráficas.
- [Sweetalert2](https://sweetalert2.github.io): Utilizada para crear el popup.
- [Animate.css](https://animate.style/): Utilizada para crear dar animaciones a los componentes.
