// ==UserScript==
// @name         Remove fbclid
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Remove fbclid from the URL
// @match        *://*/*
// ==/UserScript==

(function() {
  // Cancel in iframe
  if (window.self !== window.top) {
    return;
  }

  let url = new URL(window.location.href.replaceAll('%', '__GM_PERCENT__'));
  url.searchParams.delete('fbclid');
  window.history.pushState({}, '', url.toString().replaceAll('__GM_PERCENT__', '%'));
})();
