function fetchAndCache(t){return fetch(t.request).then(function(e){return caches.open("sw-1.2").then(function(n){return n.put(t.request,e.clone()),e})})}this.addEventListener("install",function(t){t.waitUntil(caches.open("sw-1.1").then(function(t){return t.addAll(["./","styles/style.css","js/app.js"])}))}),this.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){return e?e:fetchAndCache(t)}))});