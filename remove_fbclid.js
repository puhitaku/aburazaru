// ==UserScript==
// @name         Remove fbclid
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Remove fbclid from the URL
// @match        *://*/*
// ==/UserScript==

(function() {
  // https://stackoverflow.com/questions/1634748/how-can-i-delete-a-query-string-parameter-in-javascript
  function removeURLParameter(url, parameter) {
    // prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
      var prefix = encodeURIComponent(parameter) + '=';
      var pars = urlparts[1].split(/[&;]/g);

      // reverse iteration as may be destructive
      for (var i = pars.length; i-- > 0;) {
        // idiom for string.startsWith
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }
      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
  }

  window.history.pushState({}, "", removeURLParameter(window.location.href, 'fbclid'));
})();
