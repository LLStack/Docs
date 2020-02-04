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
    "revision": "174085e6fb95978c860536a1558c4444"
  },
  {
    "url": "assets/css/0.styles.2cd38edf.css",
    "revision": "dcb545c1c93df1844a0f4c9021ecffcf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2d50d411.js",
    "revision": "4c4f52b14ab7e8d14dbd6d10c4ca02f3"
  },
  {
    "url": "assets/js/11.6d388fbf.js",
    "revision": "efa31efa5e0223d0803e55eda7aef0e3"
  },
  {
    "url": "assets/js/12.fac933d0.js",
    "revision": "a664a89ba41b32a95b90b92aaf66a49c"
  },
  {
    "url": "assets/js/13.d814101e.js",
    "revision": "5f05a251d75da5b9ce0cbf8a83964810"
  },
  {
    "url": "assets/js/14.7b33a2eb.js",
    "revision": "dca0f417731cc7315f407294e42c9a33"
  },
  {
    "url": "assets/js/15.14cea6b4.js",
    "revision": "2957efe1a5c7d195ce288baa7b3cb5be"
  },
  {
    "url": "assets/js/16.340aad1b.js",
    "revision": "9650ec30bb3edffad2d968452e59a98e"
  },
  {
    "url": "assets/js/17.a20723ba.js",
    "revision": "1b041743104bbc4ce184234f0fa4817a"
  },
  {
    "url": "assets/js/18.f57d8763.js",
    "revision": "36a5860c66e79505026e5fcaafcc3d0d"
  },
  {
    "url": "assets/js/19.c67a6399.js",
    "revision": "86e0cedcbdf05cdd5c6f891b921ed521"
  },
  {
    "url": "assets/js/2.25f4805c.js",
    "revision": "409b07e7775cd499e18acc4e6bfe564c"
  },
  {
    "url": "assets/js/20.53ed802f.js",
    "revision": "ed2117ec2f312c2722963ca31d3d5197"
  },
  {
    "url": "assets/js/21.ab1b9cff.js",
    "revision": "9b3c91ebd40161bc3fb12700637bc7ff"
  },
  {
    "url": "assets/js/22.73d55546.js",
    "revision": "86d805aca8022878f65eb9510f45c3a6"
  },
  {
    "url": "assets/js/23.cb687969.js",
    "revision": "09d4a28b1cdd6a80bccfd4309a2e7d73"
  },
  {
    "url": "assets/js/24.cf1bbc9f.js",
    "revision": "5cc09b0299b36731d7facc43df0ddad9"
  },
  {
    "url": "assets/js/25.bce64921.js",
    "revision": "032e3ce8b8c7e9556d06171ae5e39c41"
  },
  {
    "url": "assets/js/26.244f6f63.js",
    "revision": "521e08b90d3dcf5a5f585587e3fbba59"
  },
  {
    "url": "assets/js/27.8da6a08a.js",
    "revision": "5510157f7bbd1646679f9961832d4ee3"
  },
  {
    "url": "assets/js/28.7e08cc2c.js",
    "revision": "c93034e6f40999fd56173259df3b4074"
  },
  {
    "url": "assets/js/29.91b38d56.js",
    "revision": "f2adc080089cf376ff113d2e7db64084"
  },
  {
    "url": "assets/js/3.a091ac96.js",
    "revision": "c9a6145776c455b738a45f6b9e6ef4b2"
  },
  {
    "url": "assets/js/30.85a145be.js",
    "revision": "4c8ed560a98a91d9d9f6c9ad3b24f6ca"
  },
  {
    "url": "assets/js/31.0bc49440.js",
    "revision": "788381b85aab3a12fb65c06d38fa5081"
  },
  {
    "url": "assets/js/32.4561f71a.js",
    "revision": "c04abe994c5cd20eae737c7cbe795531"
  },
  {
    "url": "assets/js/33.fa23f891.js",
    "revision": "478a7b34fead1cfbade57e996b9ed5b2"
  },
  {
    "url": "assets/js/34.caa69819.js",
    "revision": "9dd56ce678cc319f5a936fc184723383"
  },
  {
    "url": "assets/js/35.b3fd7090.js",
    "revision": "f8e5b9bd8361e3dddd7752162e9ca5c1"
  },
  {
    "url": "assets/js/36.9804a01f.js",
    "revision": "e16d775410529e049ddc3377c520c945"
  },
  {
    "url": "assets/js/37.376cd81a.js",
    "revision": "4f6b50eead43f4b4117c44c86c636222"
  },
  {
    "url": "assets/js/4.c68e79bd.js",
    "revision": "e413074b8dc5cd0b83980b4957fc8dcf"
  },
  {
    "url": "assets/js/5.351f1ee0.js",
    "revision": "17fa11b6d7ad0471d9f7bd0d8623dfba"
  },
  {
    "url": "assets/js/6.8d32e322.js",
    "revision": "daece44800609e672553baac0beceaed"
  },
  {
    "url": "assets/js/7.7c92cc73.js",
    "revision": "3c90944a121382e216920238c8e38f96"
  },
  {
    "url": "assets/js/8.59769d2e.js",
    "revision": "979f2fba14d669606dec6e38e849d7db"
  },
  {
    "url": "assets/js/9.2d97bbea.js",
    "revision": "bc6143a06d5f3c650f29cfac102baff3"
  },
  {
    "url": "assets/js/app.a453011c.js",
    "revision": "6c91a60f5e036a9574349858d7613ba9"
  },
  {
    "url": "index.html",
    "revision": "a22df7c24ecb287d4b0970c94f457f78"
  },
  {
    "url": "install/index.html",
    "revision": "8132266c85e903a7c3090e484de87fa6"
  },
  {
    "url": "lsws/index.html",
    "revision": "d3f01ae7590745d0028b8cd380dc4fed"
  },
  {
    "url": "lsws/install/index.html",
    "revision": "9651c43cd040b05732d2f4619ba9583d"
  },
  {
    "url": "lsws/Introduction/Compared.html",
    "revision": "bdddb7e603532424f604fc0fc6954e8e"
  },
  {
    "url": "lsws/Introduction/index.html",
    "revision": "7a33e375f485f369c7029f35bd5a9f7c"
  },
  {
    "url": "lsws/Lite/index.html",
    "revision": "cc1bcd746f5592a15a446aabd0411941"
  },
  {
    "url": "lsws/LiteSpeed/Activation.html",
    "revision": "41cac6f4bb2869af8a695f7efbcc6afe"
  },
  {
    "url": "lsws/LiteSpeed/index.html",
    "revision": "180ba0e4ae0e17646f59082256396f8b"
  },
  {
    "url": "lsws/LiteSpeed/waf.html",
    "revision": "4e0ea1f5b61accc4441012862de45535"
  },
  {
    "url": "lsws/mysql/index.html",
    "revision": "c5f0ce7d8051765fae238e518a2c200a"
  },
  {
    "url": "lsws/others/changelog.html",
    "revision": "42e1b68d8bfe7becfa72fe58d400c3e5"
  },
  {
    "url": "lsws/others/fdisk.html",
    "revision": "10a5ed692e16c39488986096eaf08760"
  },
  {
    "url": "lsws/others/firewall.html",
    "revision": "372a6a24b463f7edbdc37dde62ec7f38"
  },
  {
    "url": "lsws/others/Security-group.html",
    "revision": "cc7c851e3869db50f08e6e6e28bb6d56"
  },
  {
    "url": "lsws/panel/index.html",
    "revision": "076688fde1fe15e762abf6b83bc9a65f"
  },
  {
    "url": "lsws/php/index.html",
    "revision": "13c96e2f38df421cd63ea6b297d07d24"
  },
  {
    "url": "lsws/redis/index.html",
    "revision": "c26d655963b5b3aa95e6db9c027f8e35"
  },
  {
    "url": "lsws/vhost/HTTPS.html",
    "revision": "bbe37f6e46c0d1549171bd88cad3f984"
  },
  {
    "url": "lsws/vhost/index.html",
    "revision": "199ce6d0d53fd7f22355abe7b9f18c1f"
  },
  {
    "url": "ols/index.html",
    "revision": "259988813254adcafd1066b43c299ade"
  },
  {
    "url": "ols/mysql/index.html",
    "revision": "51c6129189b8b2be24092af455c740a5"
  },
  {
    "url": "ols/openlitespeed/index.html",
    "revision": "be09a2841009fff5b8965eea99133929"
  },
  {
    "url": "ols/php/index.html",
    "revision": "004529eaf9828c4503c161b05dee0445"
  },
  {
    "url": "ols/redis/index.html",
    "revision": "6ef5cf9d613a1b512b2cd60ecc12f96c"
  },
  {
    "url": "others/fdisk.html",
    "revision": "3b3a097633adb7a351a55c074ecd6d71"
  },
  {
    "url": "others/firewall.html",
    "revision": "9e4333e8e65378085435afdbf38ae68b"
  },
  {
    "url": "others/Security-group.html",
    "revision": "23b4aa7fa96d3273a43938bf7cecbcf8"
  },
  {
    "url": "start/index.html",
    "revision": "54063cb05c86c3b77a527545b681191a"
  },
  {
    "url": "vhost/HTTPS.html",
    "revision": "2c31a82a55bda5e4b1062225f125e372"
  },
  {
    "url": "vhost/index.html",
    "revision": "a3dde686e6b7b68d49f0a156a8443567"
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
