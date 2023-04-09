# Cookbook

A digital cookbook to store and search your favourite recipes.

## Building

This project targets a containerized runtime environment. The project provides a command `dockerBuild` that builds the application and bakes it into a docker image.

#### Workflows

GitHub Action workflows are preconfigured as follows:

- [`CI`](./.github/workflows/ci.yaml) - Triggers on every pull request and verifies the projects build status and code quality.
- [`CD`](./.github/workflows/cd.yaml) - Triggers on every push or tag to the `main` branch and builds and pushes the docker image to the GitHub Container Registry.

> :exclamation: The `CD` workflow requires the following secrets to be configured in the repository settings:
>
> - `CONTAINER_REGISTRY_PAT`: Personal Access Token for GitHub Container Registry.

## Usage

Here are the key tasks for using the project:

```
# Install project dependencies
pnpm install

# Start the project with hot-reloading
pnpm dev

# Bundle and build the application
pnpm build

# Perform static code analysis on the project's source code
pnpm lint

# Run automated tests for the project
pnpm test

# Build a Docker container to serve the application
pnpm dockerBuild

# Conduct a vulnerability check on the project's dependencies
pnpm audit
```
