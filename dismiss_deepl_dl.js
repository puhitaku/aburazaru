// ==UserScript==
// @name         Dismiss DeepL Download Recommendation
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Dissmiss the "DeepL for Mac" dialog automatically
// @include      https://www.deepl.com/*
// ==/UserScript==

(function() {
  let id = -1;

  let cancel = () => {
    if (id !== -1) {
      clearInterval(id);
    }
    id = -1;
  }

  let dismiss = () => {
    let e = document.querySelector("button.dl_button--3");
    if (e !== null) {
      e.click();
      cancel();
    }
  }

  // Wait for prime number of milliseconds to avoid the callbacks collide
  id = setInterval(dismiss, 101);
  setTimeout(cancel, 5003);
})();
