"use strict";var precacheConfig=[["/finality-labs-site/index.html","3a968f87bf2d1ef833d5951d2a50dde0"],["/finality-labs-site/static/css/main.a5bec2ab.css","cbaa57a9f337abb4fe5b45ae0a985036"],["/finality-labs-site/static/js/main.12ef309d.js","e240138b12a454a6001b71435ee3a39d"],["/finality-labs-site/static/media/Adrian.f6509a05.png","f6509a053413617924480a46245055af"],["/finality-labs-site/static/media/AxiomZen_Logo.df4783de.png","df4783defbadfc0458d8ea04f97da6ce"],["/finality-labs-site/static/media/Decentraland_Logo.30de00df.png","30de00dfe861b6d803a5f6f5bbe49811"],["/finality-labs-site/static/media/FL_Logo.2be92eb3.png","2be92eb3ff99802a16907d75e7b073f8"],["/finality-labs-site/static/media/Federico.9534858a.png","9534858a9de77348451f1c2484844186"],["/finality-labs-site/static/media/James.eff024e9.png","eff024e99a4a97c12aec2135c86d8e1f"],["/finality-labs-site/static/media/Jonathan.3dd800ae.png","3dd800ae8cc907f232b23dea793fc712"],["/finality-labs-site/static/media/Mission_Image.da917839.png","da917839c82f96d885c4e25152b512bf"],["/finality-labs-site/static/media/Nathan.e36ee6ef.png","e36ee6efaac689316e38ed0a758c8945"],["/finality-labs-site/static/media/OpenSans-Bold.5a100916.ttf","5a100916f94b0babde0c92aaa8fb80d6"],["/finality-labs-site/static/media/OpenSans-Bold.7ae9b8ba.eot","7ae9b8ba7886341831bf7c85a0da40d0"],["/finality-labs-site/static/media/OpenSans-Bold.89266734.woff","892667349c5cff6fcf7e40439596b97c"],["/finality-labs-site/static/media/OpenSans-Bold.d6291f88.svg","d6291f88056601e360ce6cea4bf676f4"],["/finality-labs-site/static/media/OpenSans-BoldItalic.7be88e73.woff","7be88e73fea7b64568a450d7c01346b0"],["/finality-labs-site/static/media/OpenSans-BoldItalic.a54aba83.svg","a54aba83b3d5d7702890c07c31c48147"],["/finality-labs-site/static/media/OpenSans-BoldItalic.c36b5ac7.ttf","c36b5ac7c2dddf6f525c8d161412ef41"],["/finality-labs-site/static/media/OpenSans-BoldItalic.ea07932c.eot","ea07932c5245dd421e3d05f579098bc2"],["/finality-labs-site/static/media/OpenSans-ExtraBold.12e2ed7a.woff","12e2ed7a180e601bff44253d4c7062ad"],["/finality-labs-site/static/media/OpenSans-ExtraBold.19b56cfc.ttf","19b56cfcb97fbcc245242fb28232939e"],["/finality-labs-site/static/media/OpenSans-ExtraBold.561e4b63.eot","561e4b63e9119235465ec88c8c91f2c8"],["/finality-labs-site/static/media/OpenSans-ExtraBold.8c5c497a.svg","8c5c497a47304f276f99ad05e0c5a395"],["/finality-labs-site/static/media/OpenSans-ExtraBoldItalic.4595d7f8.ttf","4595d7f8ce0e7b381abb0254f04f0ec2"],["/finality-labs-site/static/media/OpenSans-ExtraBoldItalic.4f440775.woff","4f44077586ec12a35ce6778e879d43da"],["/finality-labs-site/static/media/OpenSans-ExtraBoldItalic.5f467e78.eot","5f467e780ed0aead6614d85dcca181e1"],["/finality-labs-site/static/media/OpenSans-ExtraBoldItalic.9704305e.svg","9704305e6fd8184b40d526fca315d200"],["/finality-labs-site/static/media/OpenSans-Italic.52507468.woff","525074686dfb8aa36b1b92e29de467ac"],["/finality-labs-site/static/media/OpenSans-Italic.9b30f134.ttf","9b30f13428e1b4a659aeeab4ac1fff35"],["/finality-labs-site/static/media/OpenSans-Italic.d6671d41.svg","d6671d41dde41d355619fe05b44f4aac"],["/finality-labs-site/static/media/OpenSans-Italic.e487b7cb.eot","e487b7cb072550896dde6821d24de2be"],["/finality-labs-site/static/media/OpenSans-Light.80403756.eot","804037562eabaa5dbefa4a435206d017"],["/finality-labs-site/static/media/OpenSans-Light.963eb329.woff","963eb32907744d9a0d6b98127162808f"],["/finality-labs-site/static/media/OpenSans-Light.d79f0219.svg","d79f021974b1f6bc5c21f31689cde94f"],["/finality-labs-site/static/media/OpenSans-Light.ecb4572a.ttf","ecb4572a5e478b107dfcb60c16a7eefa"],["/finality-labs-site/static/media/OpenSans-LightItalic.26f1e68d.ttf","26f1e68dfbd8b8621e5d07f75571a1f9"],["/finality-labs-site/static/media/OpenSans-LightItalic.6725fc49.eot","6725fc490942895a65f559882a17d524"],["/finality-labs-site/static/media/OpenSans-LightItalic.97534dd4.woff","97534dd409492b05b11ab96b3dd4a557"],["/finality-labs-site/static/media/OpenSans-LightItalic.b64e9910.svg","b64e9910811cdcc8df89cec2b5025a9f"],["/finality-labs-site/static/media/OpenSans-Regular.a35546ee.eot","a35546eef3ea0de0d4735f23b0a0873b"],["/finality-labs-site/static/media/OpenSans-Regular.ac327c4d.woff","ac327c4db6284ef64ebe872b6308f5da"],["/finality-labs-site/static/media/OpenSans-Regular.cd729635.ttf","cd7296352d159532b66c07d98efb1126"],["/finality-labs-site/static/media/OpenSans-Regular.f641a7d4.svg","f641a7d4e80fd6321135b1a2b4ce8bb1"],["/finality-labs-site/static/media/OpenSans-Semibold.0ea04502.eot","0ea04502930623aa3de110aac9f9e4fd"],["/finality-labs-site/static/media/OpenSans-Semibold.33f225b8.ttf","33f225b8f5f7d6b34a0926f58f96c1e9"],["/finality-labs-site/static/media/OpenSans-Semibold.9f214421.woff","9f2144213fad53d4e0fdb26ecf93865f"],["/finality-labs-site/static/media/OpenSans-Semibold.bb100c99.svg","bb100c995f1d20b8a96462fe5f528bd4"],["/finality-labs-site/static/media/OpenSans-SemiboldItalic.1c0b4eb9.ttf","1c0b4eb93fcf561eec03297a24922d6c"],["/finality-labs-site/static/media/OpenSans-SemiboldItalic.da061416.eot","da061416028fc9a66fbc0b80d33d6e6f"],["/finality-labs-site/static/media/OpenSans-SemiboldItalic.ddc348f2.svg","ddc348f204283c4f4090a3ed03853054"],["/finality-labs-site/static/media/OpenSans-SemiboldItalic.ec55f263.woff","ec55f263e2b86bc0f28fff46b873d6df"],["/finality-labs-site/static/media/SpankChain_Logo.2a21c902.png","2a21c902942f87bc1e2c3b12485e1286"],["/finality-labs-site/static/media/Tiffany.0f6faed5.png","0f6faed5156831d114f294f76309ab07"],["/finality-labs-site/static/media/Will.5a84e527.png","5a84e5275b5ceec63cbde44ae20589c3"],["/finality-labs-site/static/media/ckba-logo.f8b4c0fe.png","f8b4c0fe5b1383ddceb211302c1af68d"],["/finality-labs-site/static/media/discord.0fdeafbd.png","0fdeafbdaa5514a3619b3a24a206854a"],["/finality-labs-site/static/media/district0X_Logo.b0300085.png","b030008572840d22472dbedd7ec1afef"],["/finality-labs-site/static/media/email.8bb24a8c.png","8bb24a8cb3a593d5b0cda606ab1d0ba5"],["/finality-labs-site/static/media/github.a813ec69.png","a813ec6956cd13b982328bd998db1f11"],["/finality-labs-site/static/media/lab.173b21db.gif","173b21db21b3e51f3e2b1200076148d6"],["/finality-labs-site/static/media/reddit.02600dc4.png","02600dc4ccbfc27992d49e75e9fcd66d"],["/finality-labs-site/static/media/twitter.d9028bd8.png","d9028bd8eb9aec56527661e28d1e4b8c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,i){var s=new URL(a);return i&&s.pathname.match(i)||(s.search+=(s.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],i=new URL(e,self.location),s=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),s]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return i.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var s="/finality-labs-site/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(s,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});