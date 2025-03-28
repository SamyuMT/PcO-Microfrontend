#!/bin/bash

# Define the packages to install
PACKAGES="webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 faker@5.1.0 html-webpack-plugin@5.5.0 --save-exact"
DEV_PACKAGE="nodemon@^2.0.15"

# Loop through each subdirectory
for dir in */; do
    if [ -d "$dir" ]; then
        echo "Entering directory: $dir"
        cd "$dir" || exit

        # Run npm install for the specified packages
        echo "Installing packages in $dir"
        npm install $PACKAGES
        npm install $DEV_PACKAGE --save-dev

        # Return to the parent directory
        cd ..
    fi
done

echo "Installation completed in all subdirectories."