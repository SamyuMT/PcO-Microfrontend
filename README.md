# Microfrontends PoC

Este proyecto implementa una arquitectura de microfrontends utilizando **Webpack Module Federation**. La aplicación está dividida en tres módulos principales: **products**, **cart** y **container**, cada uno de los cuales es independiente y puede desarrollarse, desplegarse y ejecutarse de manera autónoma.

---

## Descripción de la Prueba

La prueba de concepto (PoC) demuestra cómo dividir una aplicación web en módulos independientes que se integran mediante **Webpack Module Federation**. Cada módulo representa una funcionalidad específica de la aplicación.

### Objetivos
- Implementar una arquitectura de microfrontends utilizando **Webpack Module Federation**.
- Dividir la aplicación en tres módulos principales:
    - **Products**: Módulo que gestiona la visualización de productos.
    - **Cart**: Módulo que gestiona el carrito de compras.
    - **Container**: Módulo principal que orquesta e integra los otros dos módulos.
- Validar la interoperabilidad entre los módulos mediante la federación de módulos.
- Probar la capacidad de desarrollo y despliegue independiente de cada módulo.

---

## Pasos Implementados

### 1. Preparación del Entorno
Cada módulo (**products**, **cart**, y **container**) tiene su propio directorio con configuraciones independientes. Se utiliza **Webpack** para empaquetar los módulos y exponer funcionalidades específicas mediante `remoteEntry.js`.

### 2. Configuración de Webpack
- **Products**:
    - Exposición del módulo `./ProductsIndex` en el puerto `8081`.
- **Cart**:
    - Exposición del módulo `./CartShow` en el puerto `8082`.
- **Container**:
    - Consumo de los módulos remotos **products** y **cart** desde los puertos `8081` y `8082`, respectivamente.
    - Orquestación de los módulos para integrarlos en una única aplicación.

### 3. Automatización con Scripts
- **build-start.sh**:
    - Instala las dependencias necesarias para cada módulo.
- **dev-start.sh**:
    - Construye y ejecuta los servidores de desarrollo para cada módulo en segundo plano.

### 4. Ejecución de la Prueba
1. Iniciar el entorno de desarrollo ejecutando `dev-start.sh`.
2. Acceder al módulo **container** en el puerto `8080` para interactuar con la aplicación integrada.

---

## Tecnologías Usadas

### Lenguajes
- **JavaScript**

### Herramientas de Construcción
- **Webpack** (versión `5.88.0`): Para empaquetar los módulos.
- **Webpack CLI** y **Webpack Dev Server**: Para ejecutar y servir los módulos.

### Librerías
- **faker**: Generación de datos ficticios (usado en **products** y **cart**).
- **html-webpack-plugin**: Generación de archivos HTML dinámicos.
- **nodemon**: Reinicio automático del servidor durante el desarrollo.

### Arquitectura
- **Module Federation**: Para exponer y consumir módulos remotos.

---

## Resultados

### Éxito en la Integración
- Los módulos **products** y **cart** se integraron correctamente en el módulo **container**.
- La aplicación integrada se ejecutó sin problemas en el puerto `8080`.

### Desarrollo Independiente
- Cada módulo puede desarrollarse y desplegarse de manera autónoma.

### Escalabilidad
- La arquitectura permite agregar nuevos módulos sin afectar los existentes.

---

## Conclusiones

- La arquitectura de microfrontends es viable para proyectos que requieren modularidad y escalabilidad.
- **Webpack Module Federation** facilita la integración de módulos independientes, permitiendo un desarrollo colaborativo entre equipos.
- La separación de responsabilidades entre módulos mejora la mantenibilidad del código.
- Los scripts de automatización (`build-start.sh` y `dev-start.sh`) simplifican la configuración y ejecución del entorno de desarrollo.

---

## Instrucciones de Uso

### 1. Clonar el Repositorio
```bash
git clone https://github.com/SamyuMT/PcO-Microfrontend.git
cd Microfrontends
```

### 2. Preparar el Entorno
Ejecutar el script `build-start.sh` para instalar las dependencias y construir los módulos:
```bash
./build-start.sh
```

### 3. Iniciar el Entorno de Desarrollo
Ejecutar el script `dev-start.sh` para iniciar los servidores de desarrollo:
```bash
./dev-start.sh
```

### 4. Acceder a la Aplicación
Abrir un navegador y acceder al módulo **container** en el puerto `8080`:
```
http://localhost:8080
```

---

## Código Fuente
El código fuente de la PoC debe cargarse en un repositorio bajo una rama que lleve el nombre del tema, por ejemplo: `microfrontends-poc`.

---