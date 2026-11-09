// Winter Arc service worker: precaches the whole app so it runs fully offline, then keeps itself fresh.
var CACHE_NAME = 'winter-arc-v16';
var CORE = ['./', './index.html', './manifest.json'];
var EXTRA = ['./icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CORE).then(function(){
        return Promise.all(EXTRA.map(function(u){ return cache.add(u).catch(function(){}); }));
      });
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.filter(function(n){ return n !== CACHE_NAME; }).map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// Stale-while-revalidate: answer instantly from the cache (works with no network), and quietly refresh the
// cached copy when online so a newly uploaded version appears on the next launch. Query strings are ignored
// so app shortcuts (?tab=progress) open offline too. Other websites are never touched.
self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  var key = url.origin + url.pathname;
  var refresh = fetch(req).then(function(res){
    if(res && res.status === 200 && res.type === 'basic'){
      var copy = res.clone();
      caches.open(CACHE_NAME).then(function(c){ c.put(key, copy); });
    }
    return res;
  });
  event.respondWith(
    caches.match(req, {ignoreSearch: true}).then(function(cached){
      if(cached){ event.waitUntil(refresh.catch(function(){})); return cached; }
      return refresh.catch(function(){
        return req.mode === 'navigate' ? caches.match('./index.html') : Response.error();
      });
    })
  );
});
