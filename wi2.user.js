// ==UserScript==
// @name            Auto-accept Wi2
// @version         1.0.0
// @namespace       https://github.com/puhitaku/aburazaru
// @description     Auto-accept the agreement in the captive portal of Wi2 Public Wi-Fi
// @include         https://service.wi2.ne.jp/freewifi/*
// ==/UserScript==

(function(){
  // 1. Accept the agreement
  if (document.URL.endsWith('index.html')) {
    document.querySelector('#button_accept').click();
  }

  // 2. Close the landing page
  /*
  if (document.URL.endsWith('landing.html')) {
    // There's no way to close the tab automatically.
    // Please close the window manually :/
  }
  */
})();

