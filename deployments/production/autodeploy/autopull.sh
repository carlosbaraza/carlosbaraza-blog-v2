#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="/root/dev/carlosbaraza-blog-v2"
DEPLOY_DIR="$REPO_ROOT/deployments/production"
POLL_INTERVAL="${POLL_INTERVAL:-30}"

cd "$REPO_ROOT"

echo "[autopull] Watching $REPO_ROOT (every ${POLL_INTERVAL}s)"

while true; do
  git fetch origin main --quiet 2>/dev/null || {
    echo "[autopull] fetch failed, retrying in ${POLL_INTERVAL}s"
    sleep "$POLL_INTERVAL"
    continue
  }

  LOCAL=$(git rev-parse HEAD)
  REMOTE=$(git rev-parse origin/main)

  if [ "$LOCAL" != "$REMOTE" ] && git merge-base --is-ancestor "$LOCAL" "$REMOTE"; then
    echo "[autopull] New commits: ${LOCAL:0:7} -> ${REMOTE:0:7}"
    git pull origin main --ff-only

    echo "[autopull] Building and deploying..."
    cd "$DEPLOY_DIR"
    docker compose build --no-cache
    docker compose up -d
    cd "$REPO_ROOT"

    docker image prune -f
    echo "[autopull] Deployed ${REMOTE:0:7}"
  fi

  sleep "$POLL_INTERVAL"
done
