const CACHE_NAME = "version-1";
const self = this;

// load SW

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Success: ", reg.scope))
      .catch((err) => console.log("Failure: ", err));
  });
}

// Install SW
self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log("Opened cache");
      return cache;
    })
  );
});

// Listen for requests
self.addEventListener("fetch", () => {});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
