
// Cache name
let cacheMap = 'cacheMap-1';

// Files list to cache
let cacheFiles = [
    '/',
    '../data/parks.json',
    '../icons/park1.png',
    '../icons/park2.png',
    'index.html',
    './App.css',
    './App.js',
    './index.css',
    './map.js',
    './Markers.js',
    './WikipediaApi.js',
    '/static/js/bundle.js',
    'manifest.json',
];

// Installation Service worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheMap).then(cache => {
            return cache.addAll(cacheFiles);
        }).then( () => {
            return self.skipWaiting();
        })
    );
});

// Activation Service worker
self.addEventListener('activate', e => {
    e.waitUntil(caches.keys()
        .then(cacheNames => Promise.all(
            cacheNames.filter(cacheName => cacheName.startsWith(cacheMap) && cacheName !== cacheMap
            )
                .map(cacheName => caches.delete(cacheName)))))
});

// Fetch Service worker
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(e.request);
            })
    );
});