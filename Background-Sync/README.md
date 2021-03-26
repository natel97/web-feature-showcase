# Background Sync

Background sync can be used to update a server when you reconnect after being online

## Triggering a sync event

```js
const registration = await navigator.serviceWorker.getRegistration();
registration.sync.register("tag to pass into the service worker");
```

## Handling a reconnection

```js
this.addEventListener("sync", function (event) {
  // this code runs when a connection is established
  // event.tag is the string passed in to the register function above
});
```

## Notes

You can't access `window.localstorage` from the service worker. You need to use a thread-safe option like indexdb

## Testing locally

1. Navigate to the Application tab on top
2. Check the `Offline` box
3. Click the `Background Sync` button
4. Uncheck the `Offline` box
5. Check logs, the event should have been called in the service worker (you may need to select the serviceworker in the log dropdown)
