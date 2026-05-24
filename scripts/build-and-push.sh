#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="${1:-}"
REGION="${2:-us-central1}"
REPOSITORY="${3:-huanest-heritage}"
IMAGE_NAME="${4:-huanest-heritage-api}"
TAG="${5:-latest}"

if [[ -z "${PROJECT_ID}" ]]; then
  echo "Usage: ./scripts/build-and-push.sh <PROJECT_ID> [REGION] [REPOSITORY] [IMAGE_NAME] [TAG]"
  exit 1
fi

REGISTRY_HOST="${REGION}-docker.pkg.dev"
IMAGE_URI="${REGISTRY_HOST}/${PROJECT_ID}/${REPOSITORY}/${IMAGE_NAME}:${TAG}"

echo "Configuring Docker auth for Artifact Registry: ${REGISTRY_HOST}"
gcloud auth configure-docker "${REGISTRY_HOST}" --quiet

echo "Building image: ${IMAGE_URI}"
docker build -t "${IMAGE_URI}" .

echo "Pushing image: ${IMAGE_URI}"
docker push "${IMAGE_URI}"

echo "Done. Pushed image: ${IMAGE_URI}"
