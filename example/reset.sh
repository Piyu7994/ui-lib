#!/bin/bash

set -e  # Exit Immediately if any command fails

echo "Removing node_modules & yarn.lock from example"
rm -rf node_modules yarn.lock

echo "Removing node_modules & yarn.lock from root"
cd ..
rm -rf node_modules yarn.lock

echo "Installing dependencies in root"
yarn install

echo "Switching to example"
cd example

echo "Installing dependencies in example"
yarn install

echo "✅ All Steps Completed Successfully"