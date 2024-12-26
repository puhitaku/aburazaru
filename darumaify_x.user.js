// ==UserScript==
// @name         Darumaify X
// @namespace    https://github.com/puhitaku/aburazaru
// @version      2024-12-26
// @description  Let good vibes come in!
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let iid;

  function replace() {
    const g = document.querySelector('a[aria-label="X"] svg > g > g');
    const x = document.querySelector('a[aria-label="X"] svg > g > g > g:not([fill])');

    if (g !== null && x !== null) {
      g.setAttribute("transform", "translate(-30.5 -19.5) scale(2.25)");
      x.setAttribute("style", "display: none;");
      clearInterval(iid);
    }
  }

  iid = setInterval(replace, 50);
})();
