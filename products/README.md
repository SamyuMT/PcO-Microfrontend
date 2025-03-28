# Products Microfrontend

## Overview
The `products` microfrontend is responsible for displaying a list of products, including their names, prices, and images. It is built as part of a microfrontend architecture using Webpack Module Federation.

## Technologies Used
- **Webpack**: Module bundler for building the application.
- **Webpack Module Federation**: Enables sharing and exposing modules between microfrontends.
- **HTML Webpack Plugin**: Simplifies the creation of HTML files to serve the bundles.
- **Faker.js**: Generates fake product data for demonstration purposes.
- **CSS**: Provides styling for the product list.

## Purpose
The purpose of this microfrontend is to:
1. Display a dynamic list of products.
2. Serve as a standalone microfrontend that can be integrated into a container application.
3. Demonstrate the use of Webpack Module Federation for exposing components.

## Results
- A grid-based product list with responsive design.
- Each product includes a name, price, and image.
- The microfrontend is exposed via `remoteEntry.js` and can be consumed by other applications.

## Conclusions
- The `products` microfrontend demonstrates the power of modular architecture.
- It is easy to integrate into other applications using Module Federation.
- The use of Faker.js allows for quick prototyping without requiring a backend.