// Kラボ：ホーム画面アプリ用の最小限のサービスワーカー（データはキャッシュしない）
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
