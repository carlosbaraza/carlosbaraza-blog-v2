#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

cd "$SCRIPT_DIR"

# Ensure .env exists
if [ ! -f .env ]; then
  echo "Error: .env file not found in $SCRIPT_DIR"
  echo "Copy .env.example to .env and set your CLOUDFLARE_TUNNEL_TOKEN"
  exit 1
fi

echo "==> Building and deploying from repo at $REPO_ROOT"
echo "==> Current git ref: $(git -C "$REPO_ROOT" rev-parse --short HEAD) ($(git -C "$REPO_ROOT" branch --show-current))"

docker compose build --no-cache
docker compose up -d

echo "==> Deployment complete. Containers:"
docker compose ps
