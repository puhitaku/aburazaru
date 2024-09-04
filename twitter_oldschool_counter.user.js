// ==UserScript==
// @name         Turn Twitter impression counts into old-school view counters
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Go back to 2000s
// @match        https://x.com/*
// @match        https://tweetdeck.twitter.com/*
// ==/UserScript==

(function() {
  // Font: Pixel LCD7
  // https://www.dafont.com/pixel-lcd7.font

  const spriteBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAABACAYAAABofGJzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE
9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0w
TXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRh
LyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZmFiLCAyMDIyLzA4
LzE2LTIyOjM1OjQxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMu
b3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91
dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJo
dHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8v
bnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2Jl
LmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu
MC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag
MjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTM6MzI6MDkrMDk6
MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjExOjU1KzA5OjAwIiB4bXA6TWV0YWRh
dGFEYXRlPSIyMDIyLTEyLTIzVDE0OjExOjU1KzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIg
cGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowY2NlODMy
YS0wMTI1LTQ5Y2YtYjRmYi1iODFlZjFlZGQyN2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6
MGNjZTgzMmEtMDEyNS00OWNmLWI0ZmItYjgxZWYxZWRkMjdlIiB4bXBNTTpPcmlnaW5hbERvY3Vt
ZW50SUQ9InhtcC5kaWQ6MGNjZTgzMmEtMDEyNS00OWNmLWI0ZmItYjgxZWYxZWRkMjdlIj4gPHht
cE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RF
dnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowY2NlODMyYS0wMTI1LTQ5Y2YtYjRmYi1iODFlZjFlZGQy
N2UiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTM6MzI6MDkrMDk6MDAiIHN0RXZ0OnNvZnR3YXJl
QWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94
bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4g
PD94cGFja2V0IGVuZD0iciI/PgqZYWcAAAQUSURBVHja7d0/btxGFAfgx0BFiuQUKVLGxbqLAfsE
yR1SaA+QA2yfC2iB3EUB4lRS4TI5QE4Q90yjxLOyKS+1nH/k9xELSNCK++Pb0TwMwRWHGAMAVucL
JQBAgwMADQ4ANDgAyNjghuQRcR8RY7XH8ChP64/T/LsznlP/Me+Yaj/2i7wHLY2Hlv7eess7//2Q
d0t5reAAcIoSADpzdfLdGG+T736JiL8fvv4hIn4ukOfVRJafYoi/mqrcGK8j4vbZxxfxa0R8Wzj1
q4n3e6q+6fN/r1Dl9PV/PCNv6i75jOcxhtgXGBPjzOdP/b3VrvefM/OWnx8uq2+b85m8y+WN//Ke
nslMt13yy/tHP8uzPZ4sPpWlpQY3fSS7M37/vkhNp+p7WuPdWZN3zbxj3Hw27/SebgqNiXnj4ann
1K73nLw15of570f785m8y+V96GlOUQKwShocAJtrcHfJUvBFDMm2pHS/l5yOKHMK6pDku73wuHfZ
anpOfefWuHTWj8fD9QV7vs42tpbb793JvmrU+7l5S80PS9W3j/lM3gXyWsEBsLkVHAB0bPoqyuWu
Znr69c/Zdo3U6tBV3v7qO16Ut7fxWyNvifdny3mN3zbyuooSgDXT4ADQ4ABAgwMADQ4ANDgA0OAA
0OAAQIMDAA0OADQ4ANDgAOCiBnfs4H5P+Q1xSLK+yfY6S97WPXd9c2VdNu/xyfvitVjfXHnzOHad
t/35rLfx20xeKzgANr2CA4CuXH20vK6ph9OUH7L+FrFg3lynY9L9LlXfElmfk3fq+WPsm6zvU8/v
KW+P9W1xPltLfVvIO1rBAbBiGhwAG2hw09eu3BRJM/eW6TWN8XrRW7z3dFVXiaxPX321m7nfm8pX
O+6arPFS4zfiRXf1bXE+W0t9G/p7s4IDYAMrOADYWIO7zvbhy/wf6lwy6yHJeputDsOCW25LZi3z
Id98mbeb9zrb+O1pfsg3n/Vd34p5reAA2PQKDgA0OADQ4ABAgwMADQ4ADQ4ANDgA0OAAQIMDAA0O
ADQ4ADS4TzqeeR+e+VvJfwzcslz1zfHPVHPlK/2PoltWosbLMT/k1Xd9K+a1ggNg0ys4AFhNg3uZ
LAXfFbkfXOunI4Y4JPneXLi3l8Xvy3TJKcsa+U7Hw7HRMbHMmB3jvniNLzslbH7IOR56ru8Y+1by
WsEBsLkVHAB06+rR938kX38TY3z5/9cljPH9RJZ/VlLvqfrW8aHe72KI9595P2rmi4h4n9RvHePh
9Pi+qvz6cUZ9zQ915of26zvGdxHxdXt5x+Rx+sv32S5VLnlJe7nJIt12Zzy/bn3PyTs2te1XNx7G
xrZ5x2d+WPP8MP/42sr70NOcogRglTQ4AFZp6HCxDwBWcABocACgwQFAy/4FGJK87ggxbrAAAAAA
SUVORK5CYII=
`

  const isTweetDeck = document.location.host.startsWith('tweetdeck');

  let digits = isTweetDeck ? 4 : 6;

  const dw = 44;
  const dh = 64;

  const dwCanvas = 16.5;
  const dhCanvas = 24;

  let fn = () => {
    let ja = document.querySelectorAll('a[aria-label$="。ポストアナリティクスを表示"]');
    let en = document.querySelectorAll('a[aria-label$=". View post analytics"]');
    let zh = document.querySelectorAll('a[aria-label$="。查看帖子分析"]');

    let e = new Set([...ja, ...en, ...zh]);
    if (e.length === 0) {
      console.log('not found');
      return;
    }

    e.forEach(e => {
      const label = e.getAttribute('aria-label');
      if (e.getAttribute('last-label') === label) {
        return;
      }
      e.setAttribute('last-label', label);

      const impressions = parseInt(e.getAttribute('aria-label'));
      let adjustedDigits = Math.max(digits, impressions.toString().length);
      if (adjustedDigits <= 5) {
        if (adjustedDigits % 2 === 1) {
          adjustedDigits += 1;
        }
      }

      // Extend the space for posts that earned many impressions
      if (isTweetDeck && adjustedDigits >= 6) {
        // Remove the share button
        const share = e.parentElement.nextSibling;
        if (share.firstChild !== null) {
          share.removeChild(share.firstChild);
        }

        // Extend the container to the right
        let container = e.parentElement.parentElement.parentElement;
        container.setAttribute('style', 'margin-right: -6px');

        // Remove the number of replies
        let replies = e.parentElement.parentElement.firstChild;
        while (replies.lastElementChild !== null) {
          replies = replies.lastElementChild;
        }
        replies.innerText = '';
      }

      const impressionsDigits = impressions.toString().padStart(adjustedDigits, '0');
      const cw = dwCanvas * adjustedDigits * 2;
      const ch = dhCanvas * 2;

      let actualWidth = cw / 2;
      let actualHeight = ch / 2;
      let borderWidth = 4;

      if (isTweetDeck) {
        actualWidth = actualWidth * (16 / actualHeight);
        actualHeight = 16;
        borderWidth = 2;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.style = `width: ${actualWidth}px; height: ${actualHeight}px; border-width: ${borderWidth}px; border-style: ridge; border-color: white`;
      canvas.width = cw;
      canvas.height = ch;

      const sprite = new Image();
      sprite.src = spriteBase64;
      sprite.onload = () => {
        ctx.clearRect(0, 0, cw, ch);
        ctx.rect(0, 0, cw, ch);
        ctx.fillStyle = 'black';
        ctx.fill();

        Array.from(impressionsDigits).forEach((d, i) => {
          ctx.drawImage(sprite, dw * parseInt(d), 0, dw, dh, dwCanvas * i * 2, 0, dwCanvas * 2, dhCanvas * 2);
        });

        e.removeChild(e.firstChild);
        e.appendChild(canvas);
      }
    });
  }

  setInterval(fn, 500);
})();
