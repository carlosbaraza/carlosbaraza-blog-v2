#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME="carlosbaraza-autodeploy"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOPULL_SCRIPT="$SCRIPT_DIR/autopull.sh"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"

chmod +x "$AUTOPULL_SCRIPT"

cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Auto-deploy carlosbaraza.com on new commits
After=network-online.target docker.service
Wants=network-online.target
Requires=docker.service

[Service]
Type=simple
ExecStart=$AUTOPULL_SCRIPT
Restart=always
RestartSec=10
Environment=POLL_INTERVAL=30

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable "$SERVICE_NAME"
systemctl start "$SERVICE_NAME"

echo "Installed and started $SERVICE_NAME"
echo "  Logs: journalctl -u $SERVICE_NAME -f"
echo "  Status: systemctl status $SERVICE_NAME"
