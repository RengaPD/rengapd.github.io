'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "600a24e6f0206ba27d832d0858d78527",
"index.html": "b43f56993e707b59f76e9ff3dcc7fd2b",
"/": "b43f56993e707b59f76e9ff3dcc7fd2b",
"main.dart.js": "b601e90902d7fce3fac612731a30b6e1",
"README.md": "4a896ccfa171450eac1a7431146c560b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7a93cd10d5bcadde4f636c3998ef808c",
".git/ORIG_HEAD": "406607bb060554cae98c1d5367521780",
".git/config": "666c35ae16426de8fb61fb42156d7f39",
".git/objects/95/de5761f049988eb56f8b342cddf1d88c3554e7": "b309905a8d491d991669597cd4f2d854",
".git/objects/0c/cbb0aa2b2d5e0a5dbf34bac8d24a0d452276d5": "8d96f5ab2accde4087a07fbe21a744a6",
".git/objects/68/0411b17df67b7edeba97b72448169c69b27f01": "6647cabac589152748e81cc3a25d1b5c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/9d/8f5c9956d6f05f9930efc9067a203da4e60824": "b372082794f2d0e77f357cdd62a70612",
".git/objects/bd/5dfedfaab2a32774f77fa29185c9a37da4c6c0": "c2681f80011834b1c0661ad6df887200",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/dffe5b36ef4bb1f1d52819d63e0999c0d51d1d": "eda874674e189a56bbf7369d5d773af6",
".git/objects/ee/927c1d92bc580c5d6a8a68f95aaa797ee847b4": "24e611ed2714da31dbd67a0bec55ad8e",
".git/objects/ed/56c441de1a125ac9f092f745f5cdf576f6f207": "70557bc5cb37b7237dd263e5fdfb6394",
".git/objects/ed/9cabcd3b3af5d18161ee97d1a7244795cd1783": "cac70cde7416930e42fc7b28459e39c2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/73/268b1a0a183e0c9f1bcdfe5d2fa2be7f0aeec7": "568111569890120a01ea58e58b741291",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/9678c9f1f465953c0e824e3b5ec350cfa1e2e7": "8188d40aa278de3a5293a65b10edf101",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/f4109ee8c9948c366b0fd7ad99430126f4586c": "5f5105f942944e7e69f481849299c469",
".git/objects/36/c8deccd80295d928cc1dd316a0add51a82c060": "7edba20acb27de7d4ae6767805956417",
".git/objects/5d/28834d8f12cc6c7b8eb675159ca2a34dce3f39": "6205d334416a35363e45dfdc4371d00e",
".git/objects/65/5fdd8b02f5aa3ae6f984f5ce9f9181025eb74a": "988c5f08e89ebdb28db9da607916b903",
".git/objects/6d/ded1b3379f05de161192d30eba49dc4beb03a8": "bed4c8002671bb036715eeb7af6023db",
".git/objects/99/3e10a9e5e477168708f48765fba81414b9b875": "78f9366220620c920ff57e9628eac217",
".git/objects/52/cc43739502516d21c647016a7d17b34db18d97": "f6a86d5f9789a45e76351f9430f31b91",
".git/objects/63/1092c46c99fe06c3a32a0cfb8d0a7d0850d70f": "e8b583f169cf7c09d9b9515f1dcaf221",
".git/objects/d4/25225d2c49e3aa625a085157f9fc4a011dc235": "278d34d9e9d5a778ec2d25728452a795",
".git/objects/b1/48d3ca59af33dc1e2826b6bed34be468642e24": "a16eba2ae084cc1fdf822e203bb14a83",
".git/objects/b6/dfa54fc206d27f88a2e2d47d6026fce59c392b": "8491c5ae5646a5ba2008258bdb9a4ce5",
".git/objects/d5/d78769549a7e89167eb9a8ada3a5662f6a1fbe": "68952d6b656cb801eae2192fbceae8da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/f084c6a3e09a6d7bd4ca4a16f8dddad05bc77c": "fb437d5b5b0ad53c47e217f13fff47f5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f9/d5f51db806a080b95cf2892ab4e170e968f595": "092d768e2436cc231825fecafc42ab3f",
".git/objects/e8/43bcbc4dbeb8b3de92ae9c655ea32444c6c91c": "5ca1d62944764ff127cfefe2538450bd",
".git/objects/e8/036476540fd60ac2a1855e2ef0247c8d0db2e0": "17a5463f834ca5bdddf41ad169e6fa32",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/d15e7724277d5b77c5847ce59f38be4ff30cdd": "9e132122a225e1f2ddba757ee5c045e1",
".git/objects/4f/83f6fbdb1d8a41daa0cb0c7e451f86ddec057a": "756c5e7d216d824e1b33ebb31e85afd8",
".git/objects/85/5f54846e8942c0ea7ffd329454c3f895709a3f": "46f28f1eb99fd267e325ac10ef58544a",
".git/objects/71/0b195ed11e4b9a50bec8e374dfe9a61a6d76e0": "96d843df583b13d7010dd0ba19f657ca",
".git/objects/47/d12a6997fd31426658357d784fffd9ef882601": "e311f2724cda504769bfa0d1e4e164be",
".git/objects/22/cfac626090b735a24b15b8c8d8485e0790c391": "e4fc361898c1fe332b582386060f3e9c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31c6659574ea878959d126d14d7d0dcb",
".git/logs/refs/heads/master": "31c6659574ea878959d126d14d7d0dcb",
".git/logs/refs/remotes/origin/master": "3aa8c7ab7bc7ad1d251db6d3b9b46f6f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e1f674c0d5bdcfd50905f2517503e019",
".git/refs/remotes/origin/master": "e1f674c0d5bdcfd50905f2517503e019",
".git/index": "85a7b0f7c0c7986d85a8cf8156e94211",
".git/COMMIT_EDITMSG": "01d4c16586e7780a379d5dc23c23fa58",
".git/FETCH_HEAD": "183ae48e96581322c701c5f9b7bfa2c5",
"assets/AssetManifest.json": "155a40f28f7840fddb9681541a57e9a8",
"assets/NOTICES": "0a4a37ebb90dfd3b5c0c07324c2e5709",
"assets/FontManifest.json": "5d9b24e274c0dbfe03d1bc7903cf5e9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/fonts/AppIcons.ttf": "3f549c31ac122b706087dbda4c629240",
"assets/assets/fonts/Jost/OpenType/Jost-300-LightItalic.ttf": "3868a5ac6db4a81be62dff293d5c8efd",
"assets/assets/fonts/Jost/OpenType/Jost-600-Semi.ttf": "67b8de198b94c81ae1581b085f6c3b9e",
"assets/assets/fonts/Jost/OpenType/Jost-300-Light.ttf": "d0124fe21a71790050d9e88a3deed40b",
"assets/assets/fonts/Jost/OpenType/Jost-400-BookItalic.ttf": "27d203ada556506e0f9516f6e375d8f3",
"assets/assets/fonts/Jost/OpenType/Jost-400-Book.ttf": "5530b5edc0f9fd3e973fcb657d8237c0",
"assets/assets/fonts/Jost/OpenType/Jost-600-SemiItalic.ttf": "3505a3e869b1aacb597aa29441b0e599"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
