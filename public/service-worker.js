if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_ccPVaCOUSxE6GBf5znd1/_buildManifest.js",revision:"eaf4b3a394cd0c7a372a55fb9bf67f0e"},{url:"/_next/static/_ccPVaCOUSxE6GBf5znd1/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.223f05eaea1d42acd844.js",revision:"e0e94b6fec1120b7ba8e9745bef627cc"},{url:"/_next/static/chunks/framework.964e76377795026233d5.js",revision:"8c9e563b3d1642a9f10b407762e79e9b"},{url:"/_next/static/chunks/main-f7035ccafe5ac281ad28.js",revision:"43cf281f6dca97f4532a5477bc8f2c50"},{url:"/_next/static/chunks/pages/_app-75f27677b5ba29f0e0e6.js",revision:"46eb09af8aa7dfc2ecb2a836468039e0"},{url:"/_next/static/chunks/pages/_error-f7d85dafed132dfe3f92.js",revision:"7018d2a3d308105df4265ff59c5376be"},{url:"/_next/static/chunks/pages/index-c75b824c1cf9c29d8f96.js",revision:"981898afc5bdc5ed18446110b0c495ab"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/8512d0b5ea439d71b4fc.css",revision:"a359407bbc603e4cc22c362317df8cf5"},{url:"/images/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/logo192.png",revision:"c7d626ad7b1321a379af8c0a179e0ab8"},{url:"/images/logo512.png",revision:"6bf8dae3986e48ce6cd9460608da9987"},{url:"/images/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/manifest.json",revision:"de6a12220db739e49aab0f5f94ea886f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
