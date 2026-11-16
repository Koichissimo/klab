// Kラボ：ホーム画面アプリ用のサービスワーカー
// 画面（HTML）は毎回サーバーから最新を取りにいく（古い表示が残らないように）
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'reload' }).catch(function () { return fetch(e.request); }));
  }
});
