if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,i,o)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}}))).then((e=>{const s=o(...e);return c.default||(c.default=s),c}))})))}}define("./service-worker.js",["./workbox-7797d470"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/c3EQkeyU5RtbEMK5oosh7/_buildManifest.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/c3EQkeyU5RtbEMK5oosh7/_ssgManifest.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/2c796e83.8d2217295c3b6117f598.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/commons.db8e5b07ac008231ac1b.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/f05235b05a8476a0ee84f876768148cb54f1bfce.4c7d9ef46502b1cd2f27.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/main-c035445fc28ca20e3881.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/_app-aa71e9a416a044e6ba19.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/_error-028aab80a3957d7c32b3.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/clothing-4af6e29c637303adf01a.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/clothing/%5Bid%5D-176fcb8239b054f7f2c7.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/communitysupport-c37dc51307f32b2c0396.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/communitysupport/%5Bid%5D-e7c01be889fbec805e4e.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/employment-b10fd9c8f70412803191.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/employment/%5Bid%5D-6cb9fd3c3c51e33d9e28.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/food-823f12bbbf8b945bcb31.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/food/%5Bid%5D-006ba5d4754c0caeb1f9.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/housing-0d969422a8e3b560bf3e.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/housing/%5Bid%5D-72031e45c494c50775a2.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/index-b73c560e80e186793859.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/legalservices-90e561d0e74e7b300c47.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/legalservices/%5Bid%5D-260917654e7d3ae4a0fe.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/medicalsupport-cf86feb3c7d990935997.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/medicalsupport/%5Bid%5D-0341a696a4d6676adc01.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/mentalhealth-d3d399e770678f2d8488.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/mentalhealth/%5Bid%5D-14510c8a8e2fadd563a3.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/resourcedirectory-d5b0d4f017525f028e99.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/resourcedirectory/%5Bid%5D-1abacb5527f905eed2b3.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/socialservices-75ca6cf67d9823001113.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/socialservices/%5Bid%5D-65036aef125149f54b33.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/substanceuse-65457f0b13524428f4fc.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/substanceuse/%5Bid%5D-62fd568f68cb507a66a9.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/transportation-01b45155a5d0c9792d3c.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/pages/transportation/%5Bid%5D-05981f58198d1a2f9233.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/polyfills-6d79231ebd22f0eaca1c.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/css/03ceb7b68c5b54b454a5.css",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/_next/static/css/966a62bccb7bd996ecdd.css",revision:"c3EQkeyU5RtbEMK5oosh7"},{url:"/icons/clothing.svg",revision:"4419302a60a3810c7e8260c8fafabd50"},{url:"/icons/clothing_marker.svg",revision:"d2268457cb214f0c7de578ef22e6f89b"},{url:"/icons/community.svg",revision:"d7c3c11da3fdca9b87e5c3d8ceeea2e6"},{url:"/icons/communitysupport_marker.svg",revision:"b66b8deb51ff57badff1162995a43fce"},{url:"/icons/directory.svg",revision:"806ba2c77da4150655e66a3da77e7ef1"},{url:"/icons/employment.svg",revision:"dfe1a2f24203f24ee928b3c8b4cbb8b5"},{url:"/icons/employment_marker.svg",revision:"398a2ee7f6bc0584268898c6ebc3f4b8"},{url:"/icons/food.svg",revision:"870150320e82442c0086afe1a85f6178"},{url:"/icons/food_marker.svg",revision:"0d48e2b0181ead6e4ff2d97c03de7968"},{url:"/icons/housing.svg",revision:"19384cd3084c61e5f35891f6185bccb9"},{url:"/icons/housing_marker.svg",revision:"b3ae5b23b477da0cecd3b1c7c426f14f"},{url:"/icons/legal.svg",revision:"8d43313bd9e4a98c8b5a0627fd18f09e"},{url:"/icons/legalservices_marker.svg",revision:"ff37c906c205b0e30402ed1876ad04dc"},{url:"/icons/medical.svg",revision:"f5116b9a34440c5be5d5d16296933596"},{url:"/icons/medicalsupport_marker.svg",revision:"f0cfa0efe0ba336c5f45ee96b2d4c573"},{url:"/icons/mentalhealth.svg",revision:"713733fc2e537ab6f277f6eed9a46c06"},{url:"/icons/mentalhealth_marker.svg",revision:"44a244bedffd47f2fb0e03bffd96bbc0"},{url:"/icons/resourcedirectory_marker.svg",revision:"665f0f99453c4a635586f7ebdc8d3464"},{url:"/icons/socialservices.svg",revision:"a65be8fa438961bf741a59b87a70a431"},{url:"/icons/socialservices_marker.svg",revision:"31258b77d9a230542d44a55cfe760114"},{url:"/icons/substanceuse.svg",revision:"5d55735c0e700f17055770d489a3042b"},{url:"/icons/substanceuse_marker.svg",revision:"78a312475096be07a73b719609be855a"},{url:"/icons/transportation.svg",revision:"b75bb929bd72ba366d1dae8d91e6e463"},{url:"/icons/transportation_marker.svg",revision:"ee338d368b7d45b1e3c45370b5906e2e"},{url:"/images/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/heart.svg",revision:"6c2644343802b7f7649c53c4bc803ebc"},{url:"/images/leaf.svg",revision:"2922feee76d55282620e68d2936a7f4e"},{url:"/images/logo192.png",revision:"ef43e31a14c6f3117a0dc6c924157f4f"},{url:"/images/logo512.png",revision:"b83b814d0c00cec0928ab2af2ec49f5d"},{url:"/manifest.json",revision:"7bd80eea4db64ae06a2e9615a4b3fec1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
