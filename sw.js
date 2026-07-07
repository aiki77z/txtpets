const CACHE_NAME = "txt-pets-ipad-memo-v1";
const ASSETS = [
  "./ipad.html",
  "./index.html",
  "./styles.css",
  "./ipad-memo.css",
  "./app.js",
  "./ipad-memo.js",
  "./pet-data.js",
  "./manifest.webmanifest",
  "./build/icon.ico",
  "./hwangchoon/hatch-run/final/spritesheet.webp",
  "./choiyongmeong/hatch-run/final/spritesheet.webp",
  "./bamgeut/hatch-run/final/spritesheet.webp",
  "./dagonyang/hatch-run/final/spritesheet.webp",
  "./hhmnyaring/hatch-run/final/spritesheet.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
    )
  );
});
