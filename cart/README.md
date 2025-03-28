# Microfrontend de Carrito

## Descripción
El microfrontend `cart` es responsable de mostrar el carrito de compras, incluyendo los artículos, sus precios y una barra de progreso para la elegibilidad de envío gratuito. Forma parte de una arquitectura de microfrontends utilizando Webpack Module Federation.

## Tecnologías Usadas
- **Webpack**: Empaquetador de módulos para construir la aplicación.
- **Webpack Module Federation**: Permite compartir y exponer módulos entre microfrontends.
- **HTML Webpack Plugin**: Simplifica la creación de archivos HTML para servir los bundles.
- **Faker.js**: Genera datos falsos del carrito para propósitos de demostración.
- **CSS**: Proporciona estilos para el diseño del carrito.

## Propósito
El propósito de este microfrontend es:
1. Mostrar una lista de artículos del carrito con sus detalles.
2. Mostrar una barra de progreso que indique la elegibilidad para envío gratuito.
3. Servir como un microfrontend independiente que puede integrarse en una aplicación contenedora.

## Resultados
- Un diseño visualmente atractivo del carrito con detalles de los artículos y una barra de progreso.
- Cálculo dinámico de la elegibilidad para envío gratuito.
- El microfrontend se expone a través de `remoteEntry.js` y puede ser consumido por otras aplicaciones.

## Conclusiones
- El microfrontend `cart` demuestra la modularidad de la arquitectura de microfrontends.
- Proporciona una forma sencilla de integrar la funcionalidad del carrito en otras aplicaciones.
- El uso de Faker.js permite una rápida creación de prototipos sin necesidad de un backend.