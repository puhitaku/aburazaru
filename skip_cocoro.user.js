// ==UserScript==
// @name            Skip the invitation of COCORO MEMBERS before the download page
// @version         1.0.0
// @namespace       https://github.com/puhitaku/aburazaru
// @description     Skip invitation of COCORO MEMBERS
// @match           https://jp.sharp/support/download/members/*
// ==/UserScript==

(function() {
  'use strict';
  let button = document.querySelector('.download-button');
  if (button !== null) {
    button.click();
  }
})();
