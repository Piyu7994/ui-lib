#!/bin/bash

set -e  # Exit Immediately if any command fails

echo "Removing node_modules & yarn.lock"
rm -rf node_modules yarn.lock

echo "Installing dependencies in root"
yarn install

echo "✅ All Steps Completed Successfully"