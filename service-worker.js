!function(){"use strict";const e=1645049984045,t=`cache${e}`,n=["/client/client.b925cff9.js","/client/inject_styles.5607aec6.js","/client/index.6f4ff1a6.js","/client/personnages.c4007582.js","/client/index.3747f921.js","/client/_category_.6a2e718b.js","/client/index.47d6f5b3.js","/client/_slug_.7866cb13.js","/client/about.873a6ffb.js","/client/index.0790456c.js","/client/_slug_.9ceb163d.js"].concat(["/service-worker-index.html","/favicon.png","/fonts/rpgawesome-webfont.eot","/fonts/rpgawesome-webfont.svg","/fonts/rpgawesome-webfont.ttf","/fonts/rpgawesome-webfont.woff","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/rpg-awesome.min.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,o=n.host===self.location.host&&s.has(n.pathname),i="only-if-cached"===t.request.cache&&!o;!c||a||i||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
