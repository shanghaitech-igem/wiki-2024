#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Prompt user for confirmation to proceed with the manual deploy
echo "You are about to perform a manual deployment."
read -p "Are you sure you want to continue? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
  echo "Deployment aborted."
  exit 0
fi

# Check if the current branch is main
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Aborting: You are not on the main branch. Current branch is '$CURRENT_BRANCH'."
  exit 1
fi

# Inform the user that Gatsby clean and build will run
echo "Running Gatsby clean and build..."

# Run Gatsby clean and build
gatsby clean && gatsby build

# Get the last commit hash
LAST_COMMIT_HASH=$(git rev-parse --short HEAD)

# Add the public directory
git add public/

# Commit the changes with a message
git commit -m "${LAST_COMMIT_HASH}'s Production"

# Inform the user that changes will be pushed to the remote repository
echo "Pushing changes to the remote repository..."

# Push the changes to the remote repository
git push

# Confirm deployment completion
echo "Deployment completed successfully."
