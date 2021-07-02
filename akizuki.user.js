// ==UserScript==
// @name         Akizuki Auto Refresh
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Refresh the "Session expired" page automatically
// @include      https://akizukidenshi.com/*
// ==/UserScript==

(function() {
  let e = document.querySelector(".notice_ p")
  if (e !== null && e.innerText.startsWith("セッション")) {
    window.location.reload();
  }
})();

