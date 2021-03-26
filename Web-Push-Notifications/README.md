# Web Push Notifications

This is used for server-client communication. You don't need to send a push notification, but could be a server ping to update internal data

## Server Setup

You will need to generate some keys.

```sh
npx web-push generate-vapid-keys
```

Will get you a public and private key. Make sure you pass the public key to your frontend/subscriber

## Subscribe a Client

```js
const publicKey = process.env.PUBLIC_KEY; // Passed in from .env, CI, or something else. For this example, you could paste in the string
const registration = await navigator.serviceWorker.getRegistration();
const subscription = await registration.pushManager.subscribe({
  applicationServerKey: publicKey,
  userVisibleOnly: true,
});
```

This returns an object that looks like this

```json
{
  "endpoint": "url provided by browser",
  "expirationTime": null,
  "keys": {
    "p256dh": "long-string-here",
    "auth": "not-as-long-string-here"
  }
}
```

These details should be passed to the server and are used to communicate to the client.

## Push From Server

```bash
npx web-push send-notification \
 --endpoint="url-here" \
 --key="client-p256dh" \
 --auth="client-auth" \
 --vapid-pubkey="server-generated-public-key" \
 --vapid-pvtkey="server-private-key" \
 --payload="message-to-send-to-client" \
 --vapid-subject="url-sent-from"
```

Of course, there are packages for different backend frameworks to handle this for you. Most params will be needed.

## Handle Message from Service Worker

```js
this.addEventListener("push", function (e) {
  e.data.text(); // the text of the response, you can do whatever you want with this and handle it here

  /* Promise that tells the worker it was handled with an error or successfully */
  e.waitUntil(self.
    registration.showNotification("Message from remote server", {
      body: e.data.text(),
    });
  );
});
```
