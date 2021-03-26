# Simple Push Notifications

This example creates a simple notification from the frontend

## Requesting Permissions

```js
await Notification.requestPermission();
```

This will return a string of either `default`, `granted`, or `denied` that tells you the access a user has given

## Showing a Notification

```js
const registration = await navigator.serviceWorker.getRegistration();
registration.showNotification("Title", { body: "This is body" });
```

The first step gets the service worker. The second asks it to show a notification. There are other options to pass into the notification object (second parameter).
