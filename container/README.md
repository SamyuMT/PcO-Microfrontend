# Microfrontend de Productos

## Descripción
El microfrontend `products` es responsable de mostrar una lista de productos, incluyendo sus nombres, precios e imágenes. Forma parte de una arquitectura de microfrontends utilizando Webpack Module Federation.

## Tecnologías Usadas
- **Webpack**: Empaquetador de módulos para construir la aplicación.
- **Webpack Module Federation**: Permite compartir y exponer módulos entre microfrontends.
- **HTML Webpack Plugin**: Simplifica la creación de archivos HTML para servir los bundles.
- **Faker.js**: Genera datos falsos de productos para propósitos de demostración.
- **CSS**: Proporciona estilos para la lista de productos.

## Propósito
El propósito de este microfrontend es:
1. Mostrar una lista dinámica de productos.
2. Servir como un microfrontend independiente que puede integrarse en una aplicación contenedora.
3. Demostrar el uso de Webpack Module Federation para exponer componentes.

## Resultados
- Una lista de productos basada en un diseño de cuadrícula con diseño responsivo.
- Cada producto incluye un nombre, precio e imagen.
- El microfrontend se expone a través de `remoteEntry.js` y puede ser consumido por otras aplicaciones.

## Conclusiones
- El microfrontend `products` demuestra el poder de la arquitectura modular.
- Es fácil de integrar en otras aplicaciones utilizando Module Federation.
- El uso de Faker.js permite una rápida creación de prototipos sin necesidad de un backend.