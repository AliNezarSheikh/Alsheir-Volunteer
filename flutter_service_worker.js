'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/active1.png": "75db395c8c6a5054e11b368d39adb3ec",
"assets/asset/active2.jpg": "1cb951e1902bdd37bacc20bae695f872",
"assets/asset/active3.png": "ee9cd7990e3c1ce42451404807666a9a",
"assets/asset/active4.jpg": "88576dd8c4d740283ac605dbf11cb751",
"assets/asset/banner1.jpg": "1ec54b87265bdc74465b1e71b3e6ba13",
"assets/asset/banner2.jpg": "bc88e7e946da23eff7dc63fe0dc31420",
"assets/asset/banner3.jpg": "6c9650612f48f24b853f597e7ff47e03",
"assets/asset/banner4.jpg": "f5e457f064f3dedf083be0290d971fe2",
"assets/asset/banner5.jpg": "431f00a883d3b83320ab07699ccbefa8",
"assets/asset/logo.png": "69da7c8465173cc1a89471d18cc5e293",
"assets/asset/noor.png": "abfbf080ba1faa9bb9c430bd891f3518",
"assets/asset/team/abd.jpg": "0022e7d6af1e2b864cdecd6a08793be6",
"assets/asset/team/ahm.jpg": "00ecd11747cc57786b59e03d8b9cb29b",
"assets/asset/team/ali.jpg": "dfb26d460a5b7fd9edc766158f48fe03",
"assets/asset/team/alia.jpg": "27a4cf443d1b8215c2265fb0854d931c",
"assets/asset/team/alis.jpg": "1341b4498cfa4ee69392dc18370d78c1",
"assets/asset/team/bosh.jpg": "9b0a51ac1ce29a5242944ee53c101d15",
"assets/asset/team/han.jpg": "d0e34cfe7d7fa864e06b8879ad96b12b",
"assets/asset/team/hasans.jpg": "3252591ab6b823dfc93142a769b16934",
"assets/asset/team/hay.jpg": "5dd93dd04000ea7c19553ecd840d3f86",
"assets/asset/team/hsn.jpg": "33d524de484cad765331e66471f86fb5",
"assets/asset/team/khetam.jpg": "4a6043763e4abbea972822cb0029f555",
"assets/asset/team/lina.jpg": "59831c33ffb0ceb5bd3772bdc72825ad",
"assets/asset/team/mhd.jpg": "3b64e9bee2d887644851f15cb127b8e5",
"assets/asset/team/nagh.jpg": "1db43af0401aca9cd7a5217a08206faa",
"assets/asset/team/nas.jpg": "997d6f07b7bd4c29dcd716e5f68b726b",
"assets/asset/team/rabab.jpg": "6c518e89acc747bc0783e332b885c7ec",
"assets/asset/team/sal.jpg": "abd49a6583513b16efe83d77d1db9ea1",
"assets/asset/team/wea.jpg": "e14af7f3abfb58a59913d2b0defd9ab1",
"assets/asset/team/you.jpg": "0e64ef7cb9665e2f915f3a00669055b9",
"assets/asset/team/zz.jpg": "a165710023426c293ecf9757392afe30",
"assets/asset/tt.gif": "c92077c7bb2ff701175efb86d86ed9e1",
"assets/asset/whatsapp.png": "3d9d2a4342393d6cc2b143151d0d3d7b",
"assets/asset/who.png": "bf3c2cce92e3056bd78a78e43ee3264e",
"assets/AssetManifest.bin": "e11abcfe792359fa398f60133c434e43",
"assets/AssetManifest.bin.json": "a3b6690a1a0d3e153d651d94522fe4bd",
"assets/AssetManifest.json": "35025a552ab5f87974128a93ec8464b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "452f36579f8a7d1d57fd4f5e11a85b10",
"assets/NOTICES": "8b1c0e9c2079f13fed1fff8fca492344",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "69da7c8465173cc1a89471d18cc5e293",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3504e316d60589fa41331ce7bc67c480",
"icons/Icon-192.png": "a39ea8b41ef3cd011131abad7f28a325",
"icons/Icon-512.png": "236bc8f5f38f636a4584b1213c79eefe",
"icons/Icon-maskable-192.png": "0a77d1c3bb5ffacc1640f41b3983b958",
"icons/Icon-maskable-512.png": "1a6c2d754e8e48935328f751715dd718",
"index.html": "3dee5a8ba683756798d624921b4f5487",
"/": "3dee5a8ba683756798d624921b4f5487",
"main.dart.js": "cf92d7ae4c5dbe92712b004a8f4fee65",
"manifest.json": "eda15ef8f4249834695a8723a1dd5fd4",
"version.json": "1da69972b1c0989c680a24295d7ffd42"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
