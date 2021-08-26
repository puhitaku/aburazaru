// ==UserScript==
// @name         Rickroll Any Video
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Rickroll Any Video
// @include      http://*/*
// @include      https://*/*
// ==/UserScript==

(function() {
  'use strict';

  let htmlToElement = html => {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  // Never Gonna Give You Up
  let rick = htmlToElement(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `)

  // YouTube never gonna let you play... Cry... Goodbye...
  if (document.location.host == "www.youtube.com") {
    return;
  }

  let replace = () => {
    let video = document.querySelectorAll('video');
    let iframe = document.querySelectorAll('iframe');

    if (video !== null) {
      video.forEach(e => {
        e.replaceWith(rick);
      })
    }

    if (iframe !== null) {
      iframe.forEach(e => {
        // Never gonna let Rick be trapped into an infinite reload hell
        let src = e.getAttribute('src') || e.getAttribute('data-src');
        if (src !== null && src.startsWith('https://www.youtube.com/embed') && !src.endsWith('dQw4w9WgXcQ')) {
          e.replaceWith(rick);
        }
      })
    }
  };

  // Never gonna let elements run from Rickrolling
  setInterval(replace, 500);
})();

