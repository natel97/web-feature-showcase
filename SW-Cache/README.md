# Service Worker Cache

This example caches website data for offline use.

## Init cache

Pass in url paths you want to cache in the `cache.addAll` array.

```js
const cacheName = "v1";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(["/index.html"]);
    })
  );
});
```

This adds files to the cache

## Intercept Network Requests

```js
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        if (response) {
          console.log(`loaded ${event.request} from cache`);
          return response;
        }
        // You could also store a copy of this request to add to the cache and pull later.
        return fetch(event.request).then(function (response) {
          return response;
        });
      });
    })
  );
});
```
