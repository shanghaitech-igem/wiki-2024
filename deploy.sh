#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if the current branch is main
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Aborting: You are not on the main branch. Current branch is '$CURRENT_BRANCH'."
  exit 1
fi

# Run Gatsby clean and build
gatsby clean && gatsby build

# Get the last commit hash
LAST_COMMIT_HASH=$(git rev-parse --short HEAD)

# Add the public directory
git add public/

# Commit the changes with a message
git commit -m "${LAST_COMMIT_HASH}'s Production"

# Push the changes to the remote repository
git push
