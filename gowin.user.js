// ==UserScript==
// @name            Smooth GOWIN
// @version         1.0.0
// @namespace       https://github.com/puhitaku/aburazaru
// @description     Download files from GOWIN without login
// @include         https://www.gowinsemi.com/*
// @require            https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant              GM_getValue
// @grant              GM_setValue
// ==/UserScript==

/* globals GM_config */

(function(){
  // Helper func to build an element from HTML
  let htmlToElement = html => {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  // Define the config dialog
  GM_config.init(
  {
    'id': 'SGConfig',
    'title': 'Smooth GOWIN',
    'fields': {
      'openNewTab': {
        'label': 'Open the clicked item in a new tab',
        'type': 'checkbox',
        'default': false,
      },
    },
    'css': `
      #SGConfig_header.config_header {
        margin: 20px 0;
      }
      #SGConfig_wrapper .field_label {
        font-size: 16px;
      }
    `,
    'events': {
      'save': forgotten => {
        location.reload();
      }
    }
  });

  // Create the config button and append
  let configButton = htmlToElement(`
    <a href="javascript:void(0);">
      <div style="
        position: fixed;
        right: 200px;
        bottom: 0;
        width: 180px;
        height: 30px;
        background-color: #099;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        line-height: 30px;
        text-align: center;
        ">
          <span style=" vertical-align: middle; color: #fff;">
            Configure Smooth GOWIN
          </span>
      </div>
    </a>
  `);
  configButton.addEventListener("click", () => { GM_config.open(); });
  document.querySelector('body').appendChild(configButton);

  // Replace all download buttons without event listeners
  let downloads = document.querySelectorAll('.download');
  if (downloads === null) {
    return;
  }

  downloads.forEach(e => {
    let clone = e.cloneNode(true);
    if (GM_config.get('openNewTab')) {
      clone.firstElementChild.removeAttribute('download');
      clone.firstElementChild.setAttribute('target', '_blank');
    }
    e.parentNode.replaceChild(clone, e);
  });
})();

