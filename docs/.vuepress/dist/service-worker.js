/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4dff2ba3e74a729fb7b33af96fb6c4e1"
  },
  {
    "url": "assets/css/0.styles.97559f56.css",
    "revision": "3c1b68908431098653d258e3c5c763a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9b35b79d.js",
    "revision": "33804fb91aeef25240141a49f4f45564"
  },
  {
    "url": "assets/js/10.a5212b64.js",
    "revision": "336b964a0b94cfca50eba66e5c8b59cb"
  },
  {
    "url": "assets/js/11.6755ec4f.js",
    "revision": "0410ccb1c032f9b91182445c3780db42"
  },
  {
    "url": "assets/js/12.6dbf8150.js",
    "revision": "141b166b5691c621d7b5d5c87c8d49ab"
  },
  {
    "url": "assets/js/13.11e5e2f0.js",
    "revision": "7eb021d779df81c5d7bde4a4d93270cf"
  },
  {
    "url": "assets/js/14.7a776c17.js",
    "revision": "d3b79506aa91a83a0dfed377f24566e0"
  },
  {
    "url": "assets/js/15.9cf78700.js",
    "revision": "511b0a3ccc369a1fd3db498798b79e58"
  },
  {
    "url": "assets/js/16.6e180265.js",
    "revision": "56ef8a19b7dec7820b1311865e23ab68"
  },
  {
    "url": "assets/js/17.3f843508.js",
    "revision": "9a5f7e6b838a2c15934ad173eb23bb00"
  },
  {
    "url": "assets/js/18.ee3df6ff.js",
    "revision": "e363a5b706e31ad307424abfa95be2bd"
  },
  {
    "url": "assets/js/19.c5afcdf6.js",
    "revision": "2cd7dd0fb25ea092fa2c10cdbe3788ff"
  },
  {
    "url": "assets/js/2.bea43288.js",
    "revision": "0ffbc085097cc0751a98fc7368559438"
  },
  {
    "url": "assets/js/20.4f5934de.js",
    "revision": "56a7a8fe6c86db599e11bc7aab4dd0a9"
  },
  {
    "url": "assets/js/21.d83bc850.js",
    "revision": "562bd63877227e8c718e3f2000af14b7"
  },
  {
    "url": "assets/js/22.57909ba5.js",
    "revision": "80b946744f707ffab69e42fa8309eb28"
  },
  {
    "url": "assets/js/23.2f76c4ec.js",
    "revision": "903291c07b4a8090b06934993e40e152"
  },
  {
    "url": "assets/js/24.e87e12c1.js",
    "revision": "7496cf8d209c5d43c8c729b98fdd0a59"
  },
  {
    "url": "assets/js/25.080a03fc.js",
    "revision": "5e6d3e30669e089d9eebd75032558abb"
  },
  {
    "url": "assets/js/26.10afa216.js",
    "revision": "fc525a1a5c7d68a5224f6ccf8e4ba2e5"
  },
  {
    "url": "assets/js/27.f949a514.js",
    "revision": "93136d38e6a76863adacff8e821f0830"
  },
  {
    "url": "assets/js/28.cc40010e.js",
    "revision": "d7a6bc66bbdd943cc227dfdae7131ef2"
  },
  {
    "url": "assets/js/29.ebf3ffba.js",
    "revision": "ab282e79975743d3385c5124bcdd4a91"
  },
  {
    "url": "assets/js/3.4a8c1fee.js",
    "revision": "04d2904c460cfbedd798a6dfee208740"
  },
  {
    "url": "assets/js/30.7a6088d0.js",
    "revision": "e32b034950446afc2ce4f418ac7eee2d"
  },
  {
    "url": "assets/js/31.e6c11c23.js",
    "revision": "f1c5567f8948131f6552cd363310ec02"
  },
  {
    "url": "assets/js/32.b20f4182.js",
    "revision": "5e9295790aa826c7ec9e34d398e959b0"
  },
  {
    "url": "assets/js/33.6734b71c.js",
    "revision": "431cd418e514adf863c437ebd86d95cd"
  },
  {
    "url": "assets/js/34.276865da.js",
    "revision": "9387842dc0edb00045f24d6a9e76b8df"
  },
  {
    "url": "assets/js/35.d9251d9d.js",
    "revision": "ef80dbaaa2e54a4bacab37277e7620cc"
  },
  {
    "url": "assets/js/36.36ce6897.js",
    "revision": "153eb512e027f9eb6d1e8f5e4e96953f"
  },
  {
    "url": "assets/js/37.a9740b4c.js",
    "revision": "5c0ead3a7a2af3fa414a6ba247669a09"
  },
  {
    "url": "assets/js/38.3dc61e69.js",
    "revision": "6ffc8dc3b8c7c003b6622cbeae75149f"
  },
  {
    "url": "assets/js/39.4f009e6d.js",
    "revision": "ccfdbf91ec5ce7527bfdf9a28d9c4293"
  },
  {
    "url": "assets/js/4.737cecdd.js",
    "revision": "ced9f2f3417b5a44b7ec8b3be8048f7a"
  },
  {
    "url": "assets/js/40.f0ef9baa.js",
    "revision": "98e463e56a90c513aacd0588c267e1bf"
  },
  {
    "url": "assets/js/41.93aaf9e0.js",
    "revision": "7600de0eb381c491a69204d5b74afa18"
  },
  {
    "url": "assets/js/42.0d34df80.js",
    "revision": "af1caf6a0287b26f9d10f555bb93b366"
  },
  {
    "url": "assets/js/43.318d3cb5.js",
    "revision": "5002458ed5395625aee6d288f8f42040"
  },
  {
    "url": "assets/js/44.97285699.js",
    "revision": "00fb135b6fc9136ec9b8093cd050c3b7"
  },
  {
    "url": "assets/js/45.5fe49e7e.js",
    "revision": "ac42dfbad15a9082815e782e29d4d0da"
  },
  {
    "url": "assets/js/46.8623d41b.js",
    "revision": "6fef1d932520391a731eadd318b26454"
  },
  {
    "url": "assets/js/47.c13c4214.js",
    "revision": "eb8c26977ad0f3183661abcbf63b56fc"
  },
  {
    "url": "assets/js/48.08c8c5c8.js",
    "revision": "07df9aa85042cf971d17dbd772d45e72"
  },
  {
    "url": "assets/js/49.c2fcae8e.js",
    "revision": "f96bc2e739dbdf8ee14b3b4c584bbb46"
  },
  {
    "url": "assets/js/5.bed6ad66.js",
    "revision": "ee9803455276cc129d97699ff696c222"
  },
  {
    "url": "assets/js/50.0381df00.js",
    "revision": "5f78f49da4c071828d725b053c3d3b13"
  },
  {
    "url": "assets/js/51.bf09ef56.js",
    "revision": "dcdb834cb2ecd8f7096f923738a49b04"
  },
  {
    "url": "assets/js/52.79770144.js",
    "revision": "1f15a751cd7c96883681790aea0ef03c"
  },
  {
    "url": "assets/js/53.20dfe060.js",
    "revision": "08a0904a13f9867a98b9ef9472a633f3"
  },
  {
    "url": "assets/js/54.88824c1a.js",
    "revision": "2b068af9f079c6fbb53c646992b943bd"
  },
  {
    "url": "assets/js/55.3e8531fe.js",
    "revision": "6bd4c1885e1bae2f9e7e40e87b985f4f"
  },
  {
    "url": "assets/js/6.d9035aec.js",
    "revision": "e23ff2871fed3dda1745033e343d0bec"
  },
  {
    "url": "assets/js/7.bdbe1133.js",
    "revision": "2d9dcb39dc650b8a96e0aba2642f4c2e"
  },
  {
    "url": "assets/js/app.87338180.js",
    "revision": "6b635e6c86db02764ff83741df32365f"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "index.html",
    "revision": "5fe4f33b29aa669b61b291bf973b17b0"
  },
  {
    "url": "install/index.html",
    "revision": "acd4c7d0d23f55a8b9f09b3e434a334b"
  },
  {
    "url": "lsws/index.html",
    "revision": "998815895f7892d699155171417f571f"
  },
  {
    "url": "lsws/install/index.html",
    "revision": "e45c2af9269ba77901067dd5fcd3c679"
  },
  {
    "url": "lsws/Introduction/Compared.html",
    "revision": "76d97e26d8abfe5e4188459ab364996e"
  },
  {
    "url": "lsws/Introduction/index.html",
    "revision": "ad1bff57bb525803bc5f501a85078656"
  },
  {
    "url": "lsws/Lite/index.html",
    "revision": "6956c1fa294bd03adbecf6416cbbc8e1"
  },
  {
    "url": "lsws/LiteSpeed/Activation.html",
    "revision": "038fcfa96427585c778f68a605ca610e"
  },
  {
    "url": "lsws/LiteSpeed/index.html",
    "revision": "6c1f1b0b34e38e284829ac9e4fde0544"
  },
  {
    "url": "lsws/LiteSpeed/waf.html",
    "revision": "a3c8e87918208913583298bf7521bbc8"
  },
  {
    "url": "lsws/mysql/index.html",
    "revision": "2296dab07823f6bd4b3a79bf16bf5c72"
  },
  {
    "url": "lsws/others/changelog.html",
    "revision": "19ac5131217997e639cfa4901a148707"
  },
  {
    "url": "lsws/others/fdisk.html",
    "revision": "af4cc174b6bb485d45ff7b7dab7c5c6a"
  },
  {
    "url": "lsws/others/firewall.html",
    "revision": "1d02866b689a0b9eb0a852605de9cf30"
  },
  {
    "url": "lsws/others/Security-group.html",
    "revision": "f6e3283a95094d0a2207b49bb7da68a5"
  },
  {
    "url": "lsws/panel/index.html",
    "revision": "72b327caccfb240cf69baac84f25716a"
  },
  {
    "url": "lsws/php/index.html",
    "revision": "8c1ac9dd0e8718f9d2279a939fd617d6"
  },
  {
    "url": "lsws/redis/index.html",
    "revision": "c5ad15df2a5042b39c841d5f5b3d4835"
  },
  {
    "url": "lsws/vhost/HTTPS.html",
    "revision": "c2a752a2b04ceba06dd02c2f14555fd9"
  },
  {
    "url": "lsws/vhost/index.html",
    "revision": "a6afa369d09b0629c755f31f5bace9bd"
  },
  {
    "url": "ols/dockerfiles/index.html",
    "revision": "5c68ac0cbd3bef2b0cbd60c945b8c95b"
  },
  {
    "url": "ols/index.html",
    "revision": "5bebf6fbccb76b5557201ba777ffb0bf"
  },
  {
    "url": "ols/mysql/index.html",
    "revision": "220d168c13ca2a9ee2807ca7072ae451"
  },
  {
    "url": "ols/openlitespeed/index.html",
    "revision": "73babfb076bc8c7e7d4b7feb938cb74f"
  },
  {
    "url": "ols/php/index.html",
    "revision": "e867b9212a097f60c3736a0e50b178ae"
  },
  {
    "url": "ols/redis/index.html",
    "revision": "55c3fad5860cef2a2e8af350bff56d2f"
  },
  {
    "url": "others/fdisk.html",
    "revision": "f417921df3ac9f1d3431bc5d55dfecf6"
  },
  {
    "url": "others/firewall.html",
    "revision": "2bdc366de98b54557ce3caf658364c6c"
  },
  {
    "url": "others/Security-group.html",
    "revision": "63d6728a8f389a1d5e5ffbbf8d37b7e6"
  },
  {
    "url": "start/index.html",
    "revision": "023267e12e533e207e04cad43d8c772e"
  },
  {
    "url": "vhost/HTTPS.html",
    "revision": "6e44a3b7d0fc84e7b8925ceb52516fdf"
  },
  {
    "url": "vhost/index.html",
    "revision": "5dff014b697f4a1b44afadd82532714f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
