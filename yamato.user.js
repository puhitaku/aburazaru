// ==UserScript==
// @name         Yamato Tracking AutoSubmit
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Auto-fill “number01” with the “__no” query value and submit the form.
// @match        https://toi.kuronekoyamato.co.jp/cgi-bin/tneko*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const params = new URLSearchParams(location.search);
  const no = params.get('__no');
  if (!no) return;

  const input = document.querySelector('input[name="number01"]');
  if (!input) return;

  input.value = no;
  input.form?.submit();
})();
