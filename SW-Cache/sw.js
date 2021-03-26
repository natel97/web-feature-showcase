const cacheName = "v1";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(["/index.html"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        if (response) {
          console.log(`loaded ${event.request} from cache`);
          return response;
        }
        return fetch(event.request).then(function (response) {
          return response;
        });
      });
    })
  );
});
