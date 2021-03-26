#! /bin/bash

npx web-push send-notification \
 --endpoint="url-here" \
 --key="client-p256dh" \
 --auth="client-auth" \
 --vapid-pubkey="server-generated-public-key" \
 --vapid-pvtkey="server-private-key" \
 --payload="message-to-send-to-client" \
 --vapid-subject="url-sent-from"