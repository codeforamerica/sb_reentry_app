if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./service-worker.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TwUQfKcXb71gfcgho4YS0/_buildManifest.js",revision:"a3cec039a6155cb4aa8b62a17a09fe6d"},{url:"/_next/static/TwUQfKcXb71gfcgho4YS0/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/commons.c30e3cee2296b33804dc.js",revision:"b1292caf82748a334dbe40faa5508a3b"},{url:"/_next/static/chunks/f05235b05a8476a0ee84f876768148cb54f1bfce.c6b3da843e1b9cae8393.js",revision:"33b44278c037c03b852930ee721894ea"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"4438ad9ce98b74a68995705631ec1479"},{url:"/_next/static/chunks/main-dae41394e9d696917c9a.js",revision:"f0af7c4c40b3f177e9bc4113bed6e666"},{url:"/_next/static/chunks/pages/_app-153bc0fd764ec164f5c4.js",revision:"004e7538de7f43ce1f5e201df38467f9"},{url:"/_next/static/chunks/pages/_error-e5a351bd9ce73ce0c59a.js",revision:"0641c8248cc5b174e1d342bceb62678b"},{url:"/_next/static/chunks/pages/clothing-e76d6b31d69fd6adf5fc.js",revision:"fc411071dfd8d92c9f770a857d256474"},{url:"/_next/static/chunks/pages/clothing/%5Bid%5D-c94335f27cc9942074f4.js",revision:"0ce8b10e21b691597e1c1f4737eb0a6e"},{url:"/_next/static/chunks/pages/communitysupport-917b4da9a10c391f0fd4.js",revision:"ccae763e692213647d56d61270dbee8d"},{url:"/_next/static/chunks/pages/communitysupport/%5Bid%5D-6e56f19e1c14d7037029.js",revision:"456da6ea88addb569bcccc0797ac6f71"},{url:"/_next/static/chunks/pages/employment-3abf8a0df10eff148eb7.js",revision:"6f6f9f3fd8e493930826e37bbc56b39a"},{url:"/_next/static/chunks/pages/employment/%5Bid%5D-63d4225443489dc09bf9.js",revision:"e06fce7257ef8a9ffc95212f456f57bf"},{url:"/_next/static/chunks/pages/food-3ab1550b6391501af157.js",revision:"a3cc2a66e9e5cf140c1eb969416b9043"},{url:"/_next/static/chunks/pages/food/%5Bid%5D-1200474a552e423e34c9.js",revision:"e8c24dad615053554afe4c190cbe1d77"},{url:"/_next/static/chunks/pages/housing-f8ac103bd7a60941bbbd.js",revision:"ce5681638bd428c41f9969614f4724e4"},{url:"/_next/static/chunks/pages/housing/%5Bid%5D-8496085f3e94190b6a1b.js",revision:"6de006ca000cac5f20c4c99b39219942"},{url:"/_next/static/chunks/pages/index-31a3e97878a0f8abf8d6.js",revision:"4b30a751e827713a925801fd947b0aff"},{url:"/_next/static/chunks/pages/legalservices-c8a59014b843e742e854.js",revision:"e0efd121bf2b42348d9f4369ef7c51eb"},{url:"/_next/static/chunks/pages/legalservices/%5Bid%5D-0db32480f686aef3e35e.js",revision:"eeab20b84fd3e7d68b4486dbfeda53d8"},{url:"/_next/static/chunks/pages/medicalsupport-6964bce86fd08237eec2.js",revision:"de3d303c5cc9b72f0fc6c38d971038f5"},{url:"/_next/static/chunks/pages/medicalsupport/%5Bid%5D-988c9a0b9249219db8e9.js",revision:"ea218a5baec9da3981713d362d055d70"},{url:"/_next/static/chunks/pages/mentalhealth-4617af1e5a6c29990015.js",revision:"d5361f7d06589e6f2302de66177c42d2"},{url:"/_next/static/chunks/pages/mentalhealth/%5Bid%5D-f995883b01b035d916ec.js",revision:"cdfb9f8b60dc53e863742d0dec47f636"},{url:"/_next/static/chunks/pages/resourcedirectory-ad6b2334f71669ac843b.js",revision:"64d9994c2122f031854ac0357cb702d5"},{url:"/_next/static/chunks/pages/resourcedirectory/%5Bid%5D-134d5bd7d8169837f504.js",revision:"2e4239ff11df1eadecbbd263cd26c5f2"},{url:"/_next/static/chunks/pages/socialservices-8ba79d63f5cee5ea0077.js",revision:"c909ddaeefa3c51ea8eb3b484fa9e407"},{url:"/_next/static/chunks/pages/socialservices/%5Bid%5D-763c0ad7a6729540d8bd.js",revision:"69214ff537d8d5dcc8358e634596ea38"},{url:"/_next/static/chunks/pages/substanceuse-033b955100add50fdbb1.js",revision:"c9e7512634365655fd1b0d31f2aaa41e"},{url:"/_next/static/chunks/pages/substanceuse/%5Bid%5D-d229c500d3be87beba42.js",revision:"2626e6d5083d07acd646a0a5af4aefb6"},{url:"/_next/static/chunks/pages/transportation-8bee85247fee2b50bf98.js",revision:"03c86eeef2c60d2d023631b5e1cee736"},{url:"/_next/static/chunks/pages/transportation/%5Bid%5D-6847891e177eb779573a.js",revision:"7d43283b78f6ec4147d75b7842d0e9f7"},{url:"/_next/static/chunks/polyfills-ed341876a5c019e509cd.js",revision:"d4392dfe662d80bb805771c035b296e4"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/223de5c194367d05a897.css",revision:"2cb212b9467bc499654e3f8961be7f37"},{url:"/_next/static/css/57dd8be74b62cf5309df.css",revision:"4ee5f71a8a01d7fc2ee19003e9d3372d"},{url:"/icons/clothing.svg",revision:"4419302a60a3810c7e8260c8fafabd50"},{url:"/icons/community.svg",revision:"d7c3c11da3fdca9b87e5c3d8ceeea2e6"},{url:"/icons/directory.svg",revision:"806ba2c77da4150655e66a3da77e7ef1"},{url:"/icons/employment.svg",revision:"dfe1a2f24203f24ee928b3c8b4cbb8b5"},{url:"/icons/food.svg",revision:"7556de8b72c843d5a3ab89b59819eeca"},{url:"/icons/housing.svg",revision:"19384cd3084c61e5f35891f6185bccb9"},{url:"/icons/legal.svg",revision:"8d43313bd9e4a98c8b5a0627fd18f09e"},{url:"/icons/medical.svg",revision:"f5116b9a34440c5be5d5d16296933596"},{url:"/icons/mentalhealth.svg",revision:"713733fc2e537ab6f277f6eed9a46c06"},{url:"/icons/socialservices.svg",revision:"a65be8fa438961bf741a59b87a70a431"},{url:"/icons/substanceuse.svg",revision:"349bf35f379920cf5e6586e627ec29ea"},{url:"/icons/transportation.svg",revision:"b75bb929bd72ba366d1dae8d91e6e463"},{url:"/images/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/heart.svg",revision:"6c2644343802b7f7649c53c4bc803ebc"},{url:"/images/logo192.png",revision:"ef43e31a14c6f3117a0dc6c924157f4f"},{url:"/images/logo512.png",revision:"b83b814d0c00cec0928ab2af2ec49f5d"},{url:"/manifest.json",revision:"7bd80eea4db64ae06a2e9615a4b3fec1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
