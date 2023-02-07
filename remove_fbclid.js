// ==UserScript==
// @name         Remove fbclid
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Remove fbclid from the URL
// @match        *://*/*
// ==/UserScript==

(function() {
  let url = new URL(window.location.href.replaceAll('%', '__GM_PERCENT__'));
  url.searchParams.delete('fbclid');
  window.history.pushState({}, "", url.toString().replaceAll('__GM_PERCENT__', '%'));
})();
