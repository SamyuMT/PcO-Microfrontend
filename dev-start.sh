#!/bin/bash

# Recorrer todas las carpetas en el directorio actual
for dir in */; do
    if [ -d "$dir" ]; then
        echo "Entrando en la carpeta $dir"
        cd "$dir" || exit
        
        echo "Ejecutando npm run build en $dir"
        npm run build

        echo "Ejecutando npm run start en $dir"
        npm run start &

        # Volver al directorio anterior
        cd ..
    fi
done