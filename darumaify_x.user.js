// ==UserScript==
// @name         Darumaify X
// @namespace    https://github.com/puhitaku/aburazaru
// @version      2024-12-27
// @description  Let good vibes come in!
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Copy-and-pasting the content in the style.textContent to
  // your favorite style injector like Stylus will work.

  const style = document.createElement('style');
  style.textContent = `
    a[aria-label="X"] svg > g > g {
      transform: translate(-30.5px, -19.5px) scale(2.25);
    }

    a[aria-label="X"] svg > g > g > g:not([fill]) {
      display: none;
    }
  `;

  document.head.append(style);
})();
